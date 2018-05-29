import axios from "axios";
import AuthenticationService from "@/services/AuthenticationService.js";

const state = {
  status: "",
  token: localStorage.getItem("token") || ""
};

const getters = {
  hasToken: state => !!state.token,
  authStatus: state => state.status
};

const actions = {
  ["REQUEST_AUTH"]: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      commit("AUTH_REQUEST");
      AuthenticationService.login(user)
        .then(response => {
          const token = response.data.token;
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          commit("AUTH_SUCCESS", token);
          resolve(response);
        })
        .catch(error => {
          commit("AUTH_ERROR", error);
          localStorage.removeItem("token");
          delete axios.defaults.headers.common["Authorization"];
          reject(error);
        });
    });
  },
  ["AUTH_LOGOUT"]: ({ commit }) => {
    return new Promise(resolve => {
      commit("AUTH_LOGOUT");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      resolve();
    });
  }
};

const mutations = {
  ["AUTH_REQUEST"]: state => {
    state.status = "loading";
  },
  ["AUTH_SUCCESS"]: (state, token) => {
    state.status = "success";
    state.token = token;
  },
  ["AUTH_ERROR"]: state => {
    state.status = "error";
  },
  ["AUTH_LOGOUT"]: state => {
    state.token = "";
    state.status = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
