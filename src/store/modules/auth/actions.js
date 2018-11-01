import router from "@/routes";
import * as types from "@/store/types";

export default {
  [types.ACTION_SET_AUTH]: ({ commit, dispatch }, auth) => {
    commit(types.MUTATE_SET_AUTH, auth);
    dispatch(types.ACTION_SET_USER);
  },
  [types.ACTION_SET_USER_AUTH]: ({ commit }) => {
    commit(types.MUTATE_SET_USER_AUTH);
  },
  [types.ACTION_SET_LOGIN]: ({ commit }) => {
    commit(types.MUTATE_SET_LOGIN);
  },
  [types.ACTION_VERIFY_LOGIN_ENTER]: ({ commit, dispatch }) => {
    if (localStorage.getItem("expiresIn")) {
      const expires = new Date(localStorage.getItem("expiresIn")).getTime();
      const now = new Date().getTime();

      if (now < expires) {
        dispatch(types.ACTION_SET_USER_AUTH)
          .then(() => {
            commit(types.MUTATE_SET_AUTH, true);
          })
          .then(() => {
            commit(types.MUTATE_SET_USER);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        commit(types.MUTATE_SET_AUTH, false);
        router.push("/");
      }
    } else {
      router.push("/");
    }
  }
};
