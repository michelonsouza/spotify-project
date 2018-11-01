import * as types from "@/store/types";

export default {
  [types.ACTION_SET_ALBUM]: ({ commit }, { album, status }) => {
    commit(types.MUTATE_SET_ALBUM, { album, status });
  }
};
