import * as types from "@/store/types";

export default {
  [types.GETTER_TRACK]: state => state.track,
  [types.GETTER_TRACK_LIST]: state => state.trackList
};
