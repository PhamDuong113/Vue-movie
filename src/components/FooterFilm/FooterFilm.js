export default {
  data() {
    return {
      res: [],
      post: [],
    };
  },
  async mounted() {
    const res = await this.$http.get("/movie/popular");
    console.log(res);
  },
};
