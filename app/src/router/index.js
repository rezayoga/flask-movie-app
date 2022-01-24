import Vue from "vue";
import VueRouter from "vue-router";
<<<<<<< HEAD
import Movie from "../components/Movie.vue"

Vue.use(VueRouter);

const routes = [{
    path: "/movie",
    name: "Movie",
    component: Movie
=======
import Home from "../views/Home.vue"
import Dashboard from "../views/Dashboard.vue"
import SignIn from "../views/SignIn.vue"
import SignUp from "../views/SignUp.vue"

Vue.use(VueRouter);

const routes = [
{
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
}, {
    path: "/signin",
    name: "signin",
    component: SignIn
}, {
    path: "/signup",
    name: "signup",
    component: SignUp
}, {
    path: "/",
    name: "home",
    component: Home
>>>>>>> Updating
}];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;