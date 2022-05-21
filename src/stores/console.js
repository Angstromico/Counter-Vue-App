import { defineStore } from 'pinia';

export const useConsole = defineStore({
  id: 'consol',
  actions: {
    messageUp() {
      console.log('The number is increasing...');
    },
    messageDown() {
      console.log('The number is decreasing...');
    },
  },
});
