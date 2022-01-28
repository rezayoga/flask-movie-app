import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

require("@/store/subscriber");

import Paginate from "vuejs-paginate";
Vue.component("paginate", Paginate);

axios.defaults.baseURL = "https://movieapi.rezayogaswara.com";

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  Vue.config.productionTip = false;
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
