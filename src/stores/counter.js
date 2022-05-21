import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    num: 1,
  }),
  actions: {
    increaseCount() {
      this.count = this.count + this.num;
    },
    decreaseCount() {
      this.count = this.count - this.num;
    },
  },
  getters: {
    oddOrEven: (state) => {
      const result = state.count % 2 === 0 ? 'Even' : 'Odd';
      return result;
    },
  },
});
