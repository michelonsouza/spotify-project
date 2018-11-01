import * as types from "@/store/types";

export default {
  [types.MUTATE_SET_TRACK]: (state, track) => {
    state.track = track;
  },
  [types.MUTATE_SET_TRACK_LIST]: (state, trackList) => {
    state.trackList = trackList;
  }
};
