<template>
  <div class="count">{{ store.count }}</div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
</script>
