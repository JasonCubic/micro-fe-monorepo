<template>
  <!-- from: https://tailblocks.cc/ -->
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span class="ml-3 text-xl">Micro FrontEnds</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <router-link class="mr-5 hover:text-gray-900" to="/">Home</router-link>
        <router-link class="mr-5 hover:text-gray-900" to="/team">Team</router-link>
        <router-link class="mr-5 hover:text-gray-900" to="/contact-us">Contact Us</router-link>
      </nav>
      <button
        @click="showModal = true"
        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >
        Button
        <svg
          fill="none" stroke="currentColor" stroke-linecap="round"
          stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </header>

  <ModalTemplate v-if="showModal" @close="showModal = false">
    <template #header>
      <h1>An example micro FE modal</h1>
    </template>
    <template #body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </template>
    <template #footer>
      <button class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal" @click="showModal = false">
        Close
      </button>
      <button class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white" @click="showModal = false">OK</button>
    </template>
  </ModalTemplate>
</template>

<script setup>
// eslint-disable-next-line import/no-unresolved
import ModalTemplate from 'modal/ModalTemplate';
import { ref } from 'vue';

const showModal = ref(false);
</script>
