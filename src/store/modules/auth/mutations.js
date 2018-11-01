import * as types from "@/store/types";
import client from "@/config/sdkSpotify.config";

export default {
  [types.MUTATE_SET_AUTH]: (state, auth) => {
    if (auth) {
      state.authorization = auth;
    } else {
      state.authorization = false;
      state.token = false;
      state.expiresIn = false;

      client.token = false;

      localStorage.removeItem("token");
      localStorage.removeItem("expiresIn");
    }
  },
  [types.MUTATE_SET_USER_AUTH]: state => {
    if (state.token || localStorage.getItem("token")) {
      client.token = localStorage.getItem("token");
      state.token = client.token;
      state.expiresIn = localStorage.getItem("expiresIn");
    } else if (window.location.hash.split("&")[0].split("=")[1]) {
      const params = window.location.hash.split("&");
      const token = params[0].split("=")[1];
      const now = Date.now();

      localStorage.setItem("token", token);

      state.token = token;
      client.token = token;

      const expiresIn = params
        .filter(param => param.match(/expires_in/g))[0]
        .split("=")[1];

      state.expiresIn = new Date(now + expiresIn * 1000);
      localStorage.setItem("expiresIn", state.expiresIn);
    }
  }
};
