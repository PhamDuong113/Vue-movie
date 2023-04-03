import Vue from "vue";
import VueRouter from "vue-router";
import HomeFilm from "../views/HomeFilm/HomeFilm.vue";
import SearchFilm from "../views/SearchFilm/SearchFilm.vue";
import DetailMovie from "../views//DetailMovie/DetailMovie.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeFilm,
    },
    {
      path: "/search/:key",
      name: "search",
      component: SearchFilm,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/detail-movie/:type/:idmove",
      name: "detail-movie",
      component: DetailMovie,
    },
  ],
});

export default router;
