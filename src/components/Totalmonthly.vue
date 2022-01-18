<template>
  <div
    class="bg-white p-5 transform mb-4 mx-6 xl:mx-0 xl:translate-x-9 shadow-sm rounded-md"
  >
    <h2 class="text-center xl:text-justify">Daily Expenses Summary</h2>
    <table class="w-full my-5 flex items-center justify-center flex-col px-5">
      <tr class="flex items-center justify-between space-x-40 px-5">
        <th>Date</th>
        <th class="transform md:translate-x-8">Amount</th>
      </tr>
      <span v-if="dailyExpenses.length">
        <transition-group name="slidein" appear mode="in-out">
          <tbody v-for="items in dailyExpenses" :key="items">
            <tr
              class="flex items-center justify-between border-b pb-3 space-x-36 my-4"
            >
              <td class="flex items-center space-x-5">
                <p class="w-4 h-4 rounded-full bg-green-300"></p>
                <p>{{ items.date }}</p>
              </td>
              <td class="text-green-300">₦{{ items.expenses }}</td>
            </tr>
          </tbody>
        </transition-group>
      </span>
      <img v-else src="../assets/Artwork.png" alt="" class="w-32" />
    </table>
  </div>
</template>

<script>
const listelement = document.getElementById("list");
const pagination_element = document.getElementById("pagination");
export default {
  name: "Totalmonthly",
  props: {
    dailyExpenses: Array,
  },
  data() {
    return {
      doesUserHaveExpenses: true,
      currentPage: 1,
      rows: 5,
    };
  },
  components: {},
  methods: {
    // displayList(items, wrapper, rowsPerPage, page) {
    //   wrapper.innerHtml = ""
    //   page--;
    //   let loop_start = rowsPerPage * page
    //   let paginatedItems = items.slice(loop_start,  rowsPerPage + page)
    // },
  },
  mounted() {
    // this.displayList()
  },
};
</script>

<style scoped>
.slidein-enter-active,
.slidein-leave-active {
  transition: all 1s ease;
}
.slidein-enter-from,
.slidein-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

<!-- first get user input and pass to this component -->
