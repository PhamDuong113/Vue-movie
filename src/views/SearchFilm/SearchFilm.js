import { Getsearch } from "../../sevice/SearchFilm/SearchFilm";
import NotFound from "../../components/NotFound/NotFound.vue";
import PaginationMovie from "../../components/PaginationMovie/PaginationMovie.vue";
export default {
  data() {
    return {
      keymove: ``,
      movieSearchs: [],
      isProcessing: false,
      total_page: [{ pageid: 1, IsPageChoose: true }],
      count: 0,
      page: 1,
    };
  },
  components: {
    NotFound,
    PaginationMovie,
  },

  computed: {
    searchmovies() {
      this.keymove = this.$route.params.key;
      console.log("computed đã được gọi", this.keymove);
    },
  },
  methods: {
    async Searchmove(pageid) {
      this.isProcessing = true;

      const res = await Getsearch(this.keymove, pageid);
      this.movieSearchs = await res.data.results.slice(0, 19);
      console.log("thời gian deplay");
      if (this.count != 1) {
        for (let i = 2; i <= res.data.total_pages; i++) {
          this.total_page.push({ pageid: i, IsPageChoose: false });
        }
      }

      this.isProcessing = false;

      this.count = 1;
    },

    poster(id) {
      return (
        "https://image.tmdb.org/t/p/w500" + this.movieSearchs[id].poster_path
      );
    },
    ClickDetailMovieSSearch(id, type) {
      this.$router.push({ path: `/detail-movie/${type}/${id}` });
    },

    Pagination_change(pageid) {
      console.log("page:", this.total_page);

      this.page = pageid;

      for (let i = 0; i < this.total_page.length; i++) {
        i == pageid - 1
          ? (this.total_page[i].IsPageChoose = true)
          : (this.total_page[i].IsPageChoose = false);
      }

      this.Searchmove(pageid);
      window.scroll(0, 0);
    },

    Pre_page() {
      this.page--;
      if (this.page < 1) {
        this.page = this.total_page.length;
        this.total_page[0].IsPageChoose = false;
        this.total_page[this.total_page.length - 1].IsPageChoose = true;
      }
      this.Searchmove(this.page);
      this.total_page[this.page].IsPageChoose = false;
      this.total_page[this.page - 1].IsPageChoose = true;

      window.scroll(0, 0);
    },

    Next_page() {
      this.page++;
      if (this.page > this.total_page.length) {
        this.page = 1;
        this.total_page[0].IsPageChoose = true;
        this.total_page[this.total_page.length - 1].IsPageChoose = false;
      }
      this.Searchmove(this.page);
      this.total_page[this.page - 1].IsPageChoose = true;
      this.total_page[this.page - 2].IsPageChoose = false;

      // console.log("page hien tai sau khi next", this.page);

      window.scroll(0, 0);
    },
  },

  watch: {
    keymove() {
      this.Searchmove(this.page);
    },
  },
};
