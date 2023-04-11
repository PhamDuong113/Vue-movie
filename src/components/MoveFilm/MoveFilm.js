import GetDiscovery from "../../sevice/MoveFilmSevice/MoveFilmSevice";
import PaginationMovie from "../PaginationMovie/PaginationMovie.vue";
export default {
  props: ["typemoveid", "year", "rankmove"],
  components: {
    PaginationMovie,
  },

  data() {
    return {
      Moves: [],
      Type: "movie",
      total_page: [{ pageid: 1, IsPageChoose: true }],
      page: 1,
      count: 0,
    };
  },
  mounted() {
    this.Move(this.total_page[0].pageid);
  },

  methods: {
    async Move(pageid) {
      const res = await GetDiscovery(
        this.typemoveid,
        this.year,
        this.rankmove,
        pageid
      );
      this.Moves = res.data.results.slice(0, 18);
      console.log("movegrid:", res.data);
      // this.total_page = res.data.total_pages;
      if (this.count != 1) {
        for (let i = 2; i <= res.data.total_pages; i++) {
          this.total_page.push({ pageid: i, IsPageChoose: false });
        }
      }

      this.count = 1;
    },
    posters(id) {
      const img =
        "https://image.tmdb.org/t/p/w342" + this.Moves[id].poster_path;

      return img;
    },

    HandleClickMovie(id) {
      this.$router.push({ path: `/detail-movie/movie/${id}` });
    },

    Pagination_change(pageid) {
      console.log("page:", this.total_page);

      this.page = pageid;

      for (let i = 0; i < this.total_page.length; i++) {
        i == pageid - 1
          ? (this.total_page[i].IsPageChoose = true)
          : (this.total_page[i].IsPageChoose = false);
      }

      this.Move(pageid);

      window.scroll(0, 300);
    },

    Pre_page() {
      this.page--;
      if (this.page < 1) {
        this.page = this.total_page.length;
        this.total_page[0].IsPageChoose = false;
        this.total_page[this.total_page.length - 1].IsPageChoose = true;
      }
      this.Move(this.page);
      this.total_page[this.page].IsPageChoose = false;
      this.total_page[this.page - 1].IsPageChoose = true;

      window.scroll(0, 300);
    },

    Next_page() {
      this.page++;
      if (this.page > this.total_page.length) {
        this.page = 1;
        this.total_page[0].IsPageChoose = true;
        this.total_page[this.total_page.length - 1].IsPageChoose = false;
      }
      this.Move(this.page);
      this.total_page[this.page - 1].IsPageChoose = true;
      this.total_page[this.page - 2].IsPageChoose = false;

      window.scroll(0, 300);
    },
  },
  watch: {
    typemoveid() {
      this.Move(this.page);
    },
    year() {
      this.Move(this.page);
    },
    rankmove() {
      this.Move(this.page);
    },
  },
};
