import * as types from "@/store/types";
import client from "@/config/sdk-spotify.config";

export default {
  [types.MUTATE_SET_AUTH]: (state, auth) => {
    if (auth) {
      state.auth = auth;
    } else {
      state.auth = false;
      state.token = false;
      state.expiresIn = false;

      client.token = null;

      localStorage.removeItem("token");
      localStorage.removeItem("expiresIn");
    }
  },
  [types.MUTATE_SET_USER_AUTH]: state => {
    if (state.token.length > 0 || localStorage.getItem("token")) {
      client.token = localStorage.getItem("token");
    } else if (window.location.hash.split("&")[0].split("=")[1]) {
      const params = window.location.hash.split("&");
      const token = params[0].split("=")[1];
      const now = new Date().getTime();

      localStorage.setItem("token", token);

      state.token = token;
      client.token = token;

      const expiresIn = params
        .filter(param => param.match(/expires_in/g))[0]
        .split("=")[1];

      state.expiresIn = new Date(now + expiresIn * 1000);
      localStorage.setItem("expiresIn", state.expiresIn);
    }
  },
  [types.MUTATE_SET_LOGIN]: state => {
    state.auth = true;
    client.login().then(url => {
      window.location.href = url;
    });
  }
};
