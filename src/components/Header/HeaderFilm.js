// import { mapState } from "pinia";
import { Searchkey } from "../../stores/Searchkey";
export default {
  data() {
    return {
      shownavbar: false,
      searchshow: false,
      keysearch: "",
      Searchkey: Searchkey(),
    };
  },

  methods: {
    onchange() {
      console.log("click rooif");
      this.shownavbar = !this.shownavbar;
    },
    handlemove() {
      this.$router.push({ path: "/" });
      window.scroll(0, 300);
      this.shownavbar = false;
    },
    handleTv() {
      this.$router.push({ path: "/" });
      window.scroll(0, 1800);
    },
    handleHome() {
      this.shownabar = false;
    },
    handlehome() {
      console.log("da clcik ve home");
      this.$router.push({ path: "/" });
    },
    handlebuttonsearch() {
      console.log("click button search");
      this.searchshow = !this.searchshow;
    },

    handlesearch() {
      console.log("đã lấy được search", this.keysearch);
      this.Searchkey.type(this.keysearch);
      this.$router.push({ path: `/search/${this.keysearch}` });
      this.keysearch = "";
    },
  },

  // computed: {

  //   this.Searchkey.type("keysearch")
  // },
};
