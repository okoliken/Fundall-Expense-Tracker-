<script>
import NavbarVue from "../components/Navbar.vue";
export default {
  components: { NavbarVue },
};
</script>

<template>
  <NavbarVue />
  <transition name="fade" mode="in-out" appear>
    <main class="flex items-center justify-center">
      <div>
        <div class="flex items-center justify-center mb-20">
          <img src="../assets/Group 8.png" alt="" class="h-56" />
        </div>
        <div class="text-center">
          <h1 class="font-bold text-3xl my-3">Fundall Expense Tracker</h1>
          <p class="font-medium text-xl mb-6">Mini Project Frontend</p>

          <span class="font-bold text-lg">by Babatunde Fashola</span>
        </div>
      </div>
    </main>
  </transition>
</template>

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
</style>
