import { Getsearch } from "../../sevice/SearchFilm/SearchFilm";
import NotFound from "../../components/NotFound/NotFound.vue";

export default {
  data() {
    return {
      keymove: ``,
      movieSearchs: [],
      isProcessing: false,
    };
  },
  components: {
    NotFound,
  },

  mounted() {
    this.keymove = this.$route.params.key;
    console.log("route search:", this.$route.params.key);
    console.log("key movie mounted:", this.keymove);
  },

  computed: {
    searchmovies() {
      this.keymove = this.$route.params.key;
      console.log("computed đã được gọi", this.keymove);
    },
  },

  methods: {
    async Searchmove() {
      this.isProcessing = true;
      setTimeout(async () => {
        const res = await Getsearch(this.keymove);
        this.movieSearchs = await res.data.results;
        console.log("--------------------");
        this.isProcessing = false;
      }, 10);
    },

    poster(id) {
      return (
        "https://image.tmdb.org/t/p/w500" + this.movieSearchs[id].poster_path
      );
    },
    ClickDetailMovieSSearch(id, type) {
      this.$router.push({ path: `/detail-movie/${type}/${id}` });
    },
  },

  watch: {
    keymove() {
      this.Searchmove();
    },
  },
};
