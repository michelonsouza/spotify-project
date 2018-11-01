import * as types from "@/store/types";
import axios from "axios";

export default {
  [types.ACTION_SET_TRACK]: async ({ commit }, { track, status }) => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };

    if (status) {
      await axios
        .get(track.href, options)
        .then(res => res.data)
        .then(item => {
          commit(types.MUTATE_SET_TRACK, item);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      commit(types.MUTATE_SET_TRACK, track);
    }
  },
  [types.ACTION_SET_TRACK_LIST]: ({ commit }, { trackList, status }) => {
    if (status) {
      commit(types.MUTATE_SET_TRACK_LIST, trackList);
    } else {
      commit(types.MUTATE_SET_TRACK_LIST, false);
    }
  }
};
