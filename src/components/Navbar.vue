<template>
  <div class="py-6 px-7 md:px-20 flex items-center justify-between">
    <div>
      <img src="../assets/Fundall-MintGreen-Lockup.png" alt="" class="" />
    </div>

    <ul class="flex space-x-4">
      <li>
        <router-link
          :to="{ name: 'Login' }"
          class="uppercase font-medium hover:underline"
          >login</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'Signup' }"
          class="uppercase font-medium py-2 px-4 sign-up text-black rounded-2xl hover:underline"
          >sign up</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sign-up {
  background: #4ce895;
}
</style>
