<template>
  <div class="flex-wrapper">
    <PageHeader />
    <main class="flex-grow">
      <div class="mt-10 text-3xl mx-auto max-w-6xl">
        <div class="mt-10">
          <router-view />
        </div>
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
</script>

<style>
  .flex-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>
