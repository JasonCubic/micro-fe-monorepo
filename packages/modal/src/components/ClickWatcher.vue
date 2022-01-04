<template>
  <div ref="clickWatcherWrapper">
    <slot />
  </div>
</template>

<script setup>
import {
  ref, onMounted, onBeforeUnmount,
} from 'vue';

const clickWatcherWrapper = ref(null);
const emit = defineEmits(['click-inside', 'click-outside']);

function handleDocumentClick(event) {
  const watchedChildren = Array.prototype.slice.call(clickWatcherWrapper.value.children);
  const clickResults = watchedChildren.map((el) => el.contains(event.target));
  if (clickResults.some((result) => result === true)) {
    emit('click-inside');
  } else {
    emit('click-outside');
  }
}

onMounted(async () => {
  await new Promise((resolve) => { setTimeout(resolve, 0); });
  document.addEventListener('click', handleDocumentClick);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick);
});

</script>
