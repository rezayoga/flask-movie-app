import Vue from "vue";
import VueRouter from "vue-router";
import Movie from "../components/Movie.vue"

Vue.use(VueRouter);

const routes = [{
    path: "/movie",
    name: "Movie",
    component: Movie
}];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;