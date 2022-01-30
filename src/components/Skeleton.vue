<template>
  <div class="py-6 px-12 xl:px-20 flex items-center justify-between">
    <div></div>
  </div>

  <main
    class="container mx-auto flex flex-col-reverse xl:flex-row my-16 xl:my-0 justify-between"
  >
    <div class="w-80">
      <div
        class="flex items-center space-x-6 mx-6 xl:mx-0 transform xl:translate-x-9 my-6"
      >
        <div
          class="w-20 h-20 bg-gray-100 rounded-2xl flex items-center animate-pulse"
        ></div>
        <div class="w-full bg-gray-100 h-6 mb-2 ml-7">
          <h1 class="w-full bg-gray-100 h-6 mb-2 animate-pulse"></h1>
          <p class="w-full bg-gray-200 h-6 animate-pulse"></p>
        </div>
      </div>
      <div class="transform xl:translate-x-9 mb-7 mx-6 xl:mx-0">
        <p class="w-full bg-gray-200 h-10 my-3 animate-pulse"></p>
        <h1 class="w-full bg-gray-200 h-8 my-3 animate-pulse"></h1>
        <div class="w-full h-3 bg-gray-100 animate-pulse"></div>
      </div>
      <div
        class="transform translate-x-9 animate-pulse bg-gray-200 h-52 my-3"
      ></div>
    </div>

    <!-- EXPENSE TRACKER FORM -->

    <div
      class="bg-gray-100 animate-pulses w-full xl:w-1/2 p-8 relative transform xl:-translate-x-36 -translate-y-11 rounded-sm"
    >
      <div class="bg-gray-200 p-3 rounded-lg animate-pulse">
        <h1 class="w-full bg-gray-100 h-3 mb-3 animate-pulse">
          <span class=""> </span>
        </h1>
        <p class="w-2/5 bg-gray-100 h-2 animate-pulse"></p>
      </div>
      <div class="w-1/2 bg-gray-200 h-4 my-3 animate-pulse"></div>

      <div class="my-10">
        <form>
          <div class="flex flex-col mb-4">
            <label
              for=""
              class="mb-2 w-2/4 bg-gray-200 h-3 animate-pulse"
            ></label>
            <span class="w-2/4 bg-gray-200 h-10 animate-pulse"></span>
          </div>

          <div class="flex flex-col">
            <label
              for=""
              class="mb-2 w-2/4 bg-gray-200 h-3 animate-pulse"
            ></label>
            <span class="w-2/4 bg-gray-200 h-10 animate-pulse"></span>
          </div>

          <h1 class="w-2/4 bg-gray-200 h-3 my-3 animate-pulse"></h1>
          <!-- FIRST -->
          <div class="flex flex-col xl:flex-row items-center xl:space-x-4 mb-5">
            <div class="w-full bg-gray-200 h-10 my-3 animate-pulse"></div>

            <div class="w-full bg-gray-200 h-10 my-3 animate-pulse"></div>
          </div>
          <!-- SECOND -->
          <div class="flex flex-col xl:flex-row items-center xl:space-x-4 mb-5">
            <div class="w-full bg-gray-200 h-10 my-3 animate-pulse"></div>

            <div class="w-full bg-gray-200 h-10 my-3 animate-pulse"></div>
          </div>
          <!-- THIRD -->
          <div class="flex flex-col xl:flex-row items-center xl:space-x-4 mb-5">
            <div class="w-full bg-gray-200 h-10 my-3 animate-pulse"></div>

            <div class="w-full bg-gray-200 h-10 my-3 animate-pulse"></div>
          </div>

          <div
            class="flex items-center justify-end space-x-4 w-full bg-gray-200 animate-pulse h-10 my-3"
          ></div>

          <button
            type="submit"
            class="p-1 px-6 w-1/2 bg-gray-200 h-10 my-3 ml-32 mt-11 animate-pulse rounded-lg"
          ></button>
        </form>
      </div>
    </div>
  </main>
</template>
