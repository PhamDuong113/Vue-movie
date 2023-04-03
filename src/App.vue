<template>
  <div id="app">
    <div class="App container">
      <HeaderFilm />
      <router-view />
      <FooterFilm />
    </div>
  </div>
</template>
<script>
import HeaderFilm from "./components/Header/HeaderFilm.vue";
import FooterFilm from "./components/FooterFilm/FooterFilm.vue";
// import axios from "axios";
export default {
  components: {
    HeaderFilm,
    FooterFilm,
  },
};
</script>

<style src="./App.css"></style>
