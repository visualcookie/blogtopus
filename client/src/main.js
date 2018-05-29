import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./filters/formatDate";

import Vuikit from "vuikit";
import VuikitIcons from "@vuikit/icons";
import "@vuikit/theme";

Vue.config.productionTip = false;

Vue.use(Vuikit);
Vue.use(VuikitIcons);

const token = localStorage.getItem("token");
if (token) axios.defaults.headers.common["Authoization"] = token;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
