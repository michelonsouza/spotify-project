import * as types from "@/store/types";

export default {
  [types.ACTION_SET_USER]: ({ commit, getters }) => {
    commit(types.MUTATE_SET_USER, getters[types.GETTER_AUTH]);
  },
  [types.ACTION_SET_USER_TOP_ARTISTS]: ({ commit }) => {
    commit(types.MUTATE_SET_USER_TOP_ARTISTS);
  }
};
