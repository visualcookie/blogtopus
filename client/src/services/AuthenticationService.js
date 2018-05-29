import Api from "@/services/Api";

export default {
  request() {
    return Api().get("auth");
  },
  register(credentials) {
    return Api().post("auth/signup", credentials);
  },
  login(credentials) {
    return Api().post("auth/signin", credentials);
  }
};
