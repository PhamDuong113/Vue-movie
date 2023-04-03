import { GetDetailType } from "../../sevice/DetailMovie/DetailMovie";
import MoviePlay from "../../components/MoviePlay/MoviePlay.vue";
export default {
  components: {
    MoviePlay,
  },
  data() {
    return {
      detailmovie: "",
      active: false,
    };
  },

  mounted() {
    console.log("detail movie", this.$route.params);
    this.DetailMovie();
  },

  methods: {
    async DetailMovie() {
      const res = await GetDetailType(
        this.$route.params.type,
        this.$route.params.idmove
      );

      this.detailmovie = res.data;

      console.log("Detail movie: ", this.detailmovie);
    },
    MoviePlay() {
      this.active = true;
      window.scroll(0, 700);
    },
  },

  computed: {
    poster() {
      const poster =
        "https://image.tmdb.org/t/p/w342" + this.detailmovie.poster_path;

      console.log("posster", poster);
      return "https://image.tmdb.org/t/p/w342" + this.detailmovie.poster_path;
    },
    backgro() {
      return `url(https://image.tmdb.org/t/p/w342${this.detailmovie.backdrop_path}) no-repeat   `;
    },
  },
};
