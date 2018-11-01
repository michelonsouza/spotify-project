import * as types from "@/store/types";

export default {
  [types.MUTATE_SET_USER]: (state, { user, auth }) => {
    if (auth) {
      state.user = user;
    } else {
      state.user = false;
    }
  },
  [types.MUTATE_SET_USER_TOP_ARTISTS]: (state, artists) => {
    state.userTopArtists = artists;
  }
};
