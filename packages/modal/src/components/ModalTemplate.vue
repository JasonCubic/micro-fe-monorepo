<template>
  <div class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
    <ClickWatcher class="bg-white rounded shadow-lg w-10/12 md:w-1/3" @click-outside="$emit('close')">
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">
          <slot name="header">default header</slot>
        </h3>
        <button class="text-black close-modal" @click="$emit('close')">&cross;</button>
      </div>
      <div class="p-3">
        <slot name="body">
          default body
        </slot>
      </div>
      <div class="flex justify-end items-center w-100 border-t p-3">
        <slot name="footer">
          <button class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal" @click="$emit('close')">
            Close
          </button>
        </slot>
      </div>
    </ClickWatcher>
  </div>
</template>

<script setup>
import ClickWatcher from './ClickWatcher.vue';

defineEmits(['close']);
</script>
