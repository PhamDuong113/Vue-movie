export default {
  props: {
    total_page: Array,
    // page: Number,
    // IsPageChoose: Boolean,
  },

  methods: {
    Pagination(pageid) {
      this.$emit("Pagination_change", pageid);
    },
    Next_page() {
      this.$emit("Next_page");
    },
    Pre_page() {
      this.$emit("Pre_page")
    }
  },
};
