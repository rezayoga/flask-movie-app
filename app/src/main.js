import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
<<<<<<< HEAD
=======
import axios from 'axios'

axios.defaults.baseURL = "https://movieapi.rezayogaswara.com"
>>>>>>> Updating

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
