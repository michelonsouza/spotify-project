import * as types from "@/store/types";

export default {
  [types.GETTER_USER]: state => state.user,
  [types.GETTER_USER_TOP_ARTISTS]: state => state.userTopArtists
};
