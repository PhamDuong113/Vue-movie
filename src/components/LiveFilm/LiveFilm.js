import { TvShow } from "../../sevice/TvSeviec/TvSevice";
export default {
  data() {
    return {
      Tv: [],
    };
  },
  mounted() {
    this.CallaipTv();
  },
  methods: {
    async CallaipTv() {
      const res = await TvShow();
      this.Tv = res.data.results.slice(0, 3);
    },
    backdrop(id) {
      console.log("TV poster:", this.Tv[id].backdrop_path);
      return `https://image.tmdb.org/t/p/w342${this.Tv[id].backdrop_path}`;
    },
    posters(id) {
      return `https://image.tmdb.org/t/p/w342${this.Tv[id].poster_path}`;
    },

    HandleClickTV(id) {
      this.$router.push({ path: `/detail-movie/tv/${id}` });
    },
  },
};
