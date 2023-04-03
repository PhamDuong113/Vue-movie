import GetDiscovery from "../../sevice/MoveFilmSevice/MoveFilmSevice";

export default {
  props: ["typemoveid", "year", "rankmove"],

  data() {
    return {
      Moves: [],
      Type: "movie",
    };
  },
  mounted() {
    this.Move();
  },

  methods: {
    async Move() {
      const res = await GetDiscovery(this.typemoveid, this.year, this.rankmove);
      this.Moves = res.data.results.slice(0, 18);
      console.log("movegrid:", this.Moves);
    },
    posters(id) {
      const img =
        "https://image.tmdb.org/t/p/w342" + this.Moves[id].poster_path;

      return img;
    },

    HandleClickMovie(id) {
      this.$router.push({ path: `/detail-movie/movie/${id}` });
      console.log("click move:");
    },
  },
  watch: {
    typemoveid() {
      this.Move();
    },
    year() {
      this.Move();
    },
    rankmove() {
      this.Move();
    },
  },
};
