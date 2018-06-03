import Vue from "vue";
import Vuex from "vuex";
import authentication from "./modules/authentication";
import post from "./modules/post";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    authentication,
    post
  }
});
