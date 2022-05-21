<template>
  <div class="about">
    <h1>Click</h1>
    <button class="counter-button" @click="store.increaseCount">
      {{ store.count }}
    </button>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
</script>
<style scoped>
.counter-button {
  font-size: 5rem;
}
</style>
