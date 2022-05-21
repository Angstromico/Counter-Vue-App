<template>
  <div class="home">
    <Counter />
    <div class="buttons">
      <button @click="minusAction">-</button>
      <button @click="plusAction">+</button>
    </div>
    <div class="odd">
      <p>
        This counter is <strong>{{ store.oddOrEven }}</strong>
      </p>
    </div>
    <Inputs />
  </div>
</template>
<script setup>
import Counter from '@/components/Counter.vue';
import Inputs from '@/components/Inputs.vue';
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
let { decreaseCount, increaseCount } = store;
import { useConsole } from '@/stores/console';
const useCon = useConsole();
const plusAction = () => {
  useCon.messageUp();
  increaseCount();
};
const minusAction = () => {
  useCon.messageDown();
  decreaseCount();
};
//const count = ref(0);

// const oddOrEven = computed(() => {
// const result = count % 2 === 0 ? 'Even' : 'Odd';
// return result;
// });
</script>

<style scoped>
.count {
  font-size: 6rem;
  margin: 1rem auto;
}
.buttons button {
  font-size: 2rem;
  margin: 0.3rem;
  padding: 0.2rem 0.8rem;
  font-weight: 700;
  color: aliceblue;
  background-color: rgb(20, 20, 241);
  border-radius: 4px;
  transition: all 1s ease-in-out;
  font-weight: 700;
  border: none;
}
.buttons button:hover {
  color: rgb(41, 41, 216);
  background-color: aliceblue;
  cursor: pointer;
  transform: scale(1.009);
}
</style>
