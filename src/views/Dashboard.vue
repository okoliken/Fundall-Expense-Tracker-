<template>
  <div class="py-6 px-20 flex items-center justify-between">
    <div>
      <img src="../assets/Fundall-MintGreen-Lockup.png" alt="" />
    </div>
  </div>

  <main
    class="container mx-auto flex flex-col-reverse xl:flex-row my-16 xl:my-0 justify-between"
  >
    <div>
      <div
        class="flex items-center space-x-6 mx-6 xl:mx-0 transform xl:translate-x-9 my-6"
      >
        <div class="w-20 h-20 bg-gray-300 rounded-2xl flex items-center">
          <img
            src="../assets/Icon/Solid/User.png"
            alt=""
            class="transform translate-x-7 h-6"
          />
        </div>
        <div>
          <h1 class="font-semibold text-xl mb-2">
            {{ returnUserData.success.data.firstname }}
            {{ returnUserData.success.data.lastname }}
          </h1>
          <p>{{ returnUserData.success.data.email }}</p>
        </div>
      </div>
      <div class="transform xl:translate-x-9 mb-7 mx-6 xl:mx-0">
        <p class="text-lg font-medium">Target Monthly Expenses</p>
        <h1 class="text-2xl font-bold mb-2">₦ {{ Targetmonthly }}</h1>
        <progress id="file" :value="Targetmonthly" max="1000000">32%</progress>
      </div>
      <Totalmonthly :dailyExpenses="dailyExpenses" />
    </div>

    <!-- EXPENSE TRACKER FORM -->

    <div
      class="bg-gray-100 w-full xl:w-1/2 p-8 relative transform shadow-md xl:-translate-x-36 -translate-y-11 rounded-sm"
    >
      <div class="bg-white p-3 shadow-md rounded-lg">
        <h1 class="text-green-300 font-extrabold text-xl mb-2">
          Welcome Back,
          <span class="text-black font-extrabold">
            {{ returnUserData.success.data.firstname }}</span
          >
        </h1>
        <p class="text-sm">Now lets's get your expenses for the month</p>
      </div>
      <img
        src="../assets/Group.png"
        class="absolute top-0 right-8 transform translate-y-2 h-24 hidden lg:block"
        alt=""
      />

      <div class="my-10">
        <form @submit.prevent="addUserExpense">
          <div class="flex flex-col mb-3">
            <label for="" class="mb-2">Target monthly Expenses</label>
            <input
              type="number"
              class="p-2 w-9/12 outline-none border border-green-300 rounded-md"
              placeholder="Enter Amount"
              v-model="Targetmonthly"
              @input="maxValue"
            />
          </div>
          <transition name="fadein" mode="out-in">
            <span v-if="excceded" class="text-sm mb-4 text-red-500"
              >Target monthly Expenses should not excced 1million</span
            >
          </transition>

          <div class="flex flex-col">
            <label for="" class="mb-2">Date</label>
            <input
              type="date"
              class="p-2 w-9/12 outline-none border border-green-300 rounded-md"
              v-model="dateTarget"
              placeholder="Enter Amount"
            />
          </div>

          <h1 class="text-md font-medium my-5">Today's Expenses</h1>
          <!-- FIRST -->
          <div class="flex flex-col xl:flex-row items-center xl:space-x-4 mb-5">
            <div class="w-full">
              <input
                type="text"
                class="p-2 w-full outline-none rounded-sm border"
                placeholder="Enter item"
              />
            </div>

            <div class="w-full">
              <input
                type="number"
                v-model.number="amountone"
                class="p-2 w-full outline-none rounded-sm border"
                placeholder="Enter Amount"
              />
            </div>
          </div>
          <!-- SECOND -->
          <div class="flex flex-col xl:flex-row items-center xl:space-x-4 mb-5">
            <div class="w-full">
              <input
                type="text"
                class="p-2 w-full outline-none rounded-sm border mb-3 xl:mb-0"
                placeholder="Enter item"
              />
            </div>

            <div class="w-full">
              <input
                type="number"
                v-model.number="amounttwo"
                class="p-2 w-full outline-none rounded-sm border mb-3 xl:mb-0"
                placeholder="Enter Amount"
              />
            </div>
          </div>
          <!-- THIRD -->
          <div class="flex flex-col xl:flex-row items-center xl:space-x-4 mb-5">
            <div class="w-full">
              <input
                type="text"
                class="p-2 w-full outline-none rounded-sm border mb-3 xl:mb-0"
                placeholder="Enter item"
              />
            </div>

            <div class="w-full">
              <input
                type="number"
                v-model.number="amountthree"
                class="p-2 w-full outline-none rounded-sm border"
                placeholder="Enter Amount"
              />
            </div>
          </div>

          <div class="flex items-center justify-end space-x-4">
            <p class="">Total Actual Expenses: ₦</p>

            <input
              type="number"
              :value="(actualExpenses = amountone + amounttwo + amountthree)"
              class="border border-green-300 p-2 box-border w-48 outline-none"
            />
          </div>

          <button
            type="submit"
            class="p-1 px-6 green text-sm ml-32 mt-11 rounded-lg"
          >
            SAVE TODAYS EXPENSES
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Totalmonthly from "../components/Totalmonthly.vue";
export default {
  computed: mapGetters(["returnUserData"]),
  data() {
    return {
      amountone: "",
      amounttwo: "",
      amountthree: "",
      Targetmonthly: 0,
      dateTarget: "",
      actualExpenses: "",

      dailyExpenses: [],
      excceded: false,
    };
  },
  components: { Totalmonthly },
  methods: {
    addUserExpense() {
      const budget = { date: this.dateTarget, expenses: this.actualExpenses };
      this.dailyExpenses.push(budget);
      let items = this.getExpensesfromLocalStorage();
      items.push(budget);

      localStorage.setItem("budget", JSON.stringify(items));
      this.amountone = "";
      this.amounttwo = "";
      this.amountthree = "";
      this.dateTarget = "";
      this.actualExpenses = "";
    },
    addUserExpenseToUi() {
      let expenses = this.getExpensesfromLocalStorage();
      this.dailyExpenses = [...expenses];
    },
    getExpensesfromLocalStorage() {
      let userBudget;
      if (localStorage.getItem("budget") === null) {
        userBudget = [];
      } else {
        userBudget = JSON.parse(localStorage.getItem("budget"));
      }
      return userBudget;
    },
    maxValue(e) {
      if (e.target.value > 1000000) {
        this.excceded = true;
        const str = String(e.target.value);
        const limit = str.slice(0, -1);
        e.target.value = Number(limit);
        this.Targetmonthly = e.target.value;

        setTimeout(() => {
          this.excceded = false;
        }, 2000);
      } else {
        this.excceded = false;
      }
    },
    ...mapActions(["getUserProfile"]),
  },
  created() {
    this.addUserExpenseToUi();
    this.getUserProfile();
  },
};
</script>

<style scoped>
.green {
  background-color: #4ce895;
}
.green:hover {
  background-color: #a3d6bb;
}
progress {
  -webkit-appearance: none;
  width: 98%;
}
::-webkit-progress-value {
  background-color: #4ce895;
  border-radius: 50px;
}
::-webkit-progress-bar {
  background-color: #fff;
  border-radius: 50px;
  height: 7px;
}
.fadein-enter-active,
.fadein-leave-active {
  transition: all 1s ease;
}
.fadein-enter-from,
.fadein-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
