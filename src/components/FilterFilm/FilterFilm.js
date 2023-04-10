import { GetGene } from "../../sevice/FilterFilmSevice/FilterFilmSevice";

export default {
  data() {
    return {
      genes: [],
      time: new Date(),
      typemoveid: "28",
      year: "2023",
      rankmove: "popularity.desc",
    };
  },
  mounted() {
    this.Gene();
  },
  methods: {
    //Lấy danh sách các thể loại
    async Gene() {
      const res = await GetGene();
      this.genes = res.data.genres;
    },

    vote_average() {
      this.rankmove = "vote_average.desc";
    },
    popularity() {
      this.rankmove = "popularity.desc";
    },
    release_date() {
      this.rankmove = "release_date.desc";
    },
  },

  watch: {
    typemoveid() {
      console.log("typemove phần filter:", this.typemoveid);
      this.$emit("Geneid", this.typemoveid);
    },
    year() {
      this.$emit("filteryear", this.year);
      console.log("thoi gian la :", `${this.year}`);
    },
    rankmove() {
      this.$emit("rankmovie", this.rankmove);
      console.log("thoi gian la :", `${this.rankmove}`);
    },
  },
};
