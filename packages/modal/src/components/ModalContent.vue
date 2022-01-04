<template>
  <div class="container mx-auto">
    <h1 class="mb-8 mt-4 text-xl">Modal Example</h1>

    <button
      class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      @click="showModal = true"
    >
      open modal
    </button>

    <ModalTemplate v-if="showModal" @close="showModal = false">
      <template #header>
        <h1>An example modal</h1>
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ModalTemplate from './ModalTemplate.vue';

const showModal = ref(false);
</script>
