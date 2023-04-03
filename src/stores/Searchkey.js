import { defineStore } from "pinia";

export const Searchkey = defineStore({
  id: "Searchkey",
  state: () => ({
    keysearch: "",
  }),

  actions: {
    type(key) {
      console.log("store pina", this.$state.keysearch);
      this.$state.keysearch = key;
    },
  },
});
