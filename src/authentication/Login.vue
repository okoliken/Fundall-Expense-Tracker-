<template>
  <div class="py-6 px-12 md:px-20 flex items-center justify-between">
    <div>
      <router-link to="/">
        <img src="../assets/Fundall-MintGreen-Lockup.png" alt="" />
      </router-link>
    </div>
  </div>

  <main class="container mx-auto flex flex-col xl:flex-row xl:justify-between">
    <div class="transform xl:translate-x-52 translate-y-12 mb-20 xl:md-0">
      <div class="flex items-center justify-center">
        <img src="../assets/Group (1).png" class="h-52" />
      </div>
      <div class="my-14 text-center xl:text-justify">
        <h1 class="text-4xl font-extrabold mb-2 green">Welcome! Back</h1>
        <p class="font-extrabold text-4xl">We miss You</p>
      </div>
    </div>

    <div
      class="p-3 h-auto w-full xl:w-2/5 flex items-center flex-col rounded-md justify-center transform -translate-y-14 xl:-translate-x-36"
    >
      <transition name="fade" mode="out-in">
        <p
          class="bg-red-400 text-white p-2 mb-2 rounded-lg"
          v-if="userData.error"
        >
          {{ userData.error.message }}
        </p>
      </transition>
      <form
        @submit.prevent="createUserAccount(userDetails)"
        class="bg-white w-full shadow-md p-12 form"
      >
        <div class="w-full mb-6">
          <h1 class="font-semibold text-3xl mb-2">Holla</h1>
          <p class="font-semibold text-md">Sign in to vibe</p>
        </div>
        <div class="flex flex-col mb-6">
          <label for="" class="text-sm l1">Email or Username</label>
          <input
            @focus="changelabelcolor"
            @blur="removelabelcolor"
            v-model="userDetails.email"
            type="email"
            required
            placeholder="Enter Username"
            class="border p-2 focus:border-green-300 outline-none"
          />
        </div>
        <div class="flex flex-col mb-10">
          <label for="" class="text-sm l1">Password</label>
          <input
            v-model="userDetails.password"
            @focus="changelabelcolor"
            @blur="removelabelcolor"
            type="password"
            placeholder="Enter Password"
            required
            class="border p-2 focus:border-green-300 outline-none"
          />
        </div>

        <div v-if="logining === true" class="relative">
          <button
            :disabled="logining === true"
            type="submit"
            :class="{ 'sign-logining': logining }"
            class="text-center flex items-center justify-center w-full py-3 shadow-md font-bold text-md cursor-not-allowed"
          >
            <img src="../assets/1497.gif" alt="not found" class="w-5" />
          </button>
        </div>

        <input
          v-else
          type="submit"
          value="LOGIN"
          class="text-center w-full py-3 shadow-md sign-up font-bold text-md cursor-pointer"
        />

        <p class="text-sm text-center mt-3 mb-3">
          Don't have an account?
          <router-link :to="{ name: 'Signup' }" class="green"
            >Register here</router-link
          >
        </p>

        <p class="text-sm text-center py-3 text-gray-400">
          By clicking on Login, you agree to our
          <span class="green"
            >Terms & <br />
            conditions and Privacy Policy</span
          >
        </p>
      </form>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      userDetails: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["createUserAccount"]),
    changelabelcolor(e) {
      e.target.previousElementSibling.classList.add("text-green-300");
    },
    removelabelcolor(e) {
      e.target.previousElementSibling.classList.remove("text-green-300");
    },
  },
  computed: mapState(["logining", "userData"]),
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.green {
  color: #4ce895;
}
.sign-up {
  background-color: #4ce895;
}

.sign-logining {
  background-color: #bdf2d6;
}
</style>
