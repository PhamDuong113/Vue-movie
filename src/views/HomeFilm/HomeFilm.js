import BannerFilm from "../../components/BannerFilm/BannerFilm.vue";
import FilterFilm from "../../components/FilterFilm/FilterFilm.vue";
import MoveFilm from "../../components/MoveFilm/MoveFilm.vue";
import LiveFilm from "../../components/LiveFilm/LiveFilm.vue";

export default {
  data() {
    return {
      typemoveid: "28",
      year: "2023",
      rankmove: "popularity.desc",
    };
  },
  components: {
    BannerFilm,
    FilterFilm,
    MoveFilm,
    LiveFilm,
  },

  methods: {
    Geneid(id) {
      console.log("thể loại move được chọn ", id);
      this.typemoveid = id;
    },
    filteryear(yearid) {
      this.year = yearid;
    },
    filterrankmovie(rank) {
      this.rankmove = rank;
    },
  },
};
