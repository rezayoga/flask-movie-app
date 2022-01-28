import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import MovieDetail from "../views/MovieDetail.vue";
import MovieAdd from "../views/MovieAdd.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      //console.log(store.getters)

      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "signin",
        });
      }

      next();
    },
  },
  {
    path: "/dashboard/movie/:id",
    name: "movie-detail",
    component: MovieDetail,
    beforeEnter: (to, from, next) => {
      //console.log(store.getters)

      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "signin",
        });
      }

      next();
    },
  },
  {
    path: "/dashboard/movie",
    name: "movie-add",
    component: MovieAdd,
    beforeEnter: (to, from, next) => {
      //console.log(store.getters)

      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "signin",
        });
      }

      next();
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/",
    name: "home",
    component: SignIn,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
