import axios from "axios";
import store from "@/store";

export default () => {
  const instance = axios.create({
    baseURL: `http://localhost:3000`
  });

  instance.interceptors.response.use(
    response => response,
    error => {
      const response = error.response;

      if (
        response.status === 401 &&
        response.config &&
        !response.config.__isRetryRequest
      ) {
        store.dispatch("AUTH_LOGOUT");
      }
    }
  );

  return instance;
};
