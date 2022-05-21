<template>
  <div class="inputs">
    <h3>Edit Number:</h3>
    <input type="number" v-model="store.count" />
    <h3>Change +/- Increaser/Decreaser:</h3>
    <input type="number" v-model="store.num" />
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
</script>
<style scoped>
.inputs {
  width: 100%;
  max-width: 1500px;
}
.inputs input {
  width: 95%;
  border-radius: 4px;
  font: inherit;
  padding: 0.2em 0.5em;
  text-align: center;
}
.inputs input:focus {
  outline: none;
}
@media (min-width: 400px) {
  .inputs input {
    width: 90%;
  }
}
@media (min-width: 768px) {
  .inputs input {
    width: 70%;
  }
}
@media (min-width: 1000px) {
  .inputs input {
    width: 50%;
  }
}
</style>
