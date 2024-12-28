<template>
  <time :datetime="current.toISOString()">
    目前的時間是：{{ formatTime(current) }}
  </time>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const current = ref(new Date());
const formatTime = (date) => {
  return date.toLocaleString();
};

onMounted(() => {
  const timer = setInterval(() => {
    current.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>
