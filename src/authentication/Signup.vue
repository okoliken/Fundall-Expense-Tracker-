<template>
  <div class="py-6 px-12 md:px-20 flex items-center justify-between">
    <div>
      <router-link to="/">
        <img src="../assets/Fundall-MintGreen-Lockup.png" alt="" />
      </router-link>
    </div>
  </div>

  <main class="container mx-auto flex flex-col xl:flex-row xl:justify-between">
    <div class="transform xl:translate-x-32 translate-y-12 mb-20 xl:mb-0">
      <div class="flex items-center justify-center">
        <img src="../assets/Group8.png" alt="" class="h-52" />
      </div>
      <div class="my-14 text-center xl:text-justify">
        <h1 class="text-4xl font-bold mb-8 green">
          Welcome!
          <span class="text-black"
            >Let's get <br />
            to know you.</span
          >
        </h1>
        <p class="font-medium text-md">
          You first step toward a better financial <br />
          lifestyle starts here.
        </p>
      </div>
    </div>

    <div
      class="p-3 h-auto flex items-center flex-col rounded-md justify-center transform -translate-y-14 xl:-translate-x-36"
    >
      <form
        @submit.prevent="createUserAccount(userDetails)"
        class="bg-white w-full shadow-md p-12"
      >
        <div class="flex flex-col md:flex-row md:space-x-5 mb-2">
          <div class="flex flex-col mb-3">
            <label for="first" class="text-sm focus-visible:text-green-300"
              >First Name</label
            >
            <input
              type="text"
              v-model="userDetails.firstname"
              placeholder="Enter First Name"
              @focus="changelabelcolor"
              @blur="removelabelcolor"
              id="first"
              required
              class="border p-2 focus:border-green-300 outline-none"
            />
          </div>
          <div class="flex flex-col mb-5">
            <label for="" class="text-sm">Last Name</label>
            <input
              v-model="userDetails.lastname"
              @focus="changelabelcolor"
              @blur="removelabelcolor"
              type="text"
              required
              placeholder="Enter Last Name"
              class="border p-2 focus:border-green-300 outline-none"
            />
          </div>
        </div>
        <div class="flex flex-col mb-7">
          <label for="" class="text-sm">Email Address</label>
          <input
            v-model="userDetails.email"
            type="email"
            required
            @focus="changelabelcolor"
            @blur="removelabelcolor"
            placeholder="Enter First Name"
            class="border p-2 focus:border-green-300 outline-none"
          />
        </div>
        <div class="flex flex-col mb-7">
          <label for="" class="text-sm">Password</label>
          <input
            v-model="userDetails.password"
            type="password"
            placeholder="Enter Password"
            required
            @focus="changelabelcolor"
            @blur="removelabelcolor"
            class="border p-2 focus:border-green-300 outline-none"
          />
        </div>

        <div class="flex flex-col mb-5">
          <label for="" class="text-sm">Confirm Password</label>
          <input
            v-model="userDetails.password_confirmation"
            type="password"
            required
            @focus="changelabelcolor"
            @blur="removelabelcolor"
            placeholder="Confirm Password"
            class="border p-2 focus:border-green-300 outline-none"
          />
        </div>
        <div v-if="creatingAccount === true" class="relative">
          <button
            :disabled="creatingAccount === true"
            type="submit"
            class="text-center flex items-center justify-center w-full mt-2 py-3 shadow-md sign-up font-bold text-md cursor-not-allowed"
          >
            <img
              src="../assets/1497.gif"
              alt="not found"
              class="w-7 transform"
            />
          </button>
        </div>

        <input
          v-else
          type="submit"
          value="SIGN UP"
          class="text-center w-full py-3 shadow-md sign-up font-bold text-md cursor-pointer"
        />

        <p class="text-sm text-center mt-7">
          Already have an account?
          <router-link :to="{ name: 'Login' }" class="green"
            >Login here</router-link
          >
        </p>
      </form>
      <p class="text-sm text-center py-4 text-gray-400">
        By clicking on Login, you agree to our
        <span class="green"
          >Terms & <br />
          conditions and Privacy Policy</span
        >
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      userDetails: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      creatingAccount: false,
    };
  },
  methods: {
    async createUserAccount(userinput) {
      try {
        this.creatingAccount = true;
        const request = await fetch(
          "https://campaign.fundall.io/api/v1/register",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userinput),
          }
        );
        const response = await request.json();
        this.creatingAccount = false;

        this.$router.push("/authentication/Login");
        console.log(response);
      } catch (error) {
        console.log(error);
        this.creatingAccount = false;
      }
    },
    changelabelcolor(e) {
      e.target.previousElementSibling.classList.add("text-green-300");
    },
    removelabelcolor(e) {
      e.target.previousElementSibling.classList.remove("text-green-300");
    },
  },
};
</script>

<style scoped>
.green {
  color: #4ce895;
}
.sign-up {
  background-color: #4ce895;
}
</style>
