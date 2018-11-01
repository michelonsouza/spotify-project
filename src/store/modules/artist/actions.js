import * as types from "@/store/types";

export default {
  [types.ACTION_SET_ARTIST]: ({ commit }, { artist, status }) => {
    commit(types.MUTATE_SET_ARTIST, { artist, status });
  }
};
