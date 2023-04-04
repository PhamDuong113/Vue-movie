import { SlideShow } from "../../sevice/SlideShow/SlideShow";

export default {
  data() {
    return {
      SlideShows: [],
    };
  },

  mounted() {
    this.Slide();
  },

  methods: {
    async Slide() {
      const res = await SlideShow();
      this.SlideShows = res.data.results.slice(0, 4);
      console.log("slide show:", this.SlideShows);
    },
    posters(id) {
      const img =
        "https://image.tmdb.org/t/p/w342" + this.SlideShows[id].backdrop_path;
      return img;
    },

    HandleClickMovie(id) {
      this.$router.push({ path: `/detail-movie/movie/${id}` });
      console.log("click move:");
    },
  },
};
