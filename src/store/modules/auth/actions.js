import * as types from "@/store/types";
import client from "@/config/sdkSpotify.config";
import router from "@/routes";

export default {
  [types.ACTION_SET_AUTH]: ({ commit, dispatch }, auth) => {
    commit(types.MUTATE_SET_AUTH, auth);
    dispatch(types.ACTION_SET_USER);
    if (!auth) {
      dispatch(types.ACTION_SET_USER_TOP_ARTISTS, false);
    }
  },
  [types.ACTION_SET_USER_AUTH]: ({ commit }) => {
    commit(types.MUTATE_SET_USER_AUTH);
  },
  [types.ACTION_SET_LOGIN]: async ({ commit }) => {
    await client.login().then(url => {
      commit(types.MUTATE_SET_AUTH, true);
      window.location.href = url;
    });
  },
  [types.ACTION_VERIFY_LOGIN_ENTER]: async ({ commit, dispatch, getters }) => {
    if (localStorage.getItem("expiresIn")) {
      const expires = new Date(localStorage.getItem("expiresIn")).getTime();
      const now = Date.now();

      if (now < expires) {
        commit(types.MUTATE_SET_AUTH, true);
        if (!getters[types.GETTER_TOKEN]) {
          await dispatch(types.ACTION_SET_USER_AUTH);
        }
        if (!getters[types.GETTER_USER]) {
          await dispatch(types.ACTION_SET_USER);
        }
        if (!getters[types.GETTER_USER_TOP_ARTISTS]) {
          await dispatch(types.ACTION_SET_USER_TOP_ARTISTS, true);
        }
      } else {
        commit(types.MUTATE_SET_AUTH, false);
        router.push("/");
      }
    }
  }
};
