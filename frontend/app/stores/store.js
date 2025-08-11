import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    isActive: false,
  }),
  actions: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
});
