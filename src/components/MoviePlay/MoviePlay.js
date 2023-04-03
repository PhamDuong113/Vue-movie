export default {
  props: {
    detailmovie: Object,
  },
  data() {
    return {
      type: this.$route.params.type,

      section: "1",
      esp: "1",
    };
  },
  computed: {
    PlayMovie() {
      const playmovie = `https://www.2embed.to/embed/tmdb/movie?id=${this.$route.params.idmove}&autoplay=1`;

      console.log("play movie:", playmovie);
      return playmovie;
    },
    PlayTv() {
      const playtv = `https://www.2embed.to/embed/tmdb/tv?id=${this.$route.params.idmove}&s=${this.section}&e=${this.esp}`;

      console.log("play movie:", playtv);
      return playtv;
    },
  },
  methods: {
    ClickEps(esp) {
      console.log("tập :", esp);
      this.esp = esp;
    },
  },
};
// {`https://www.2embed.to/embed/tmdb/tv?id=${infomove[0]}&s=${section}&e=${esp}`}
