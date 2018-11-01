import * as types from "@/store/types";
import axios from "axios";

function setOptions() {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };
}

export default {
  [types.ACTION_SET_USER]: async ({ commit, getters }) => {
    if (getters[types.GETTER_AUTH]) {
      await axios
        .get("https://api.spotify.com/v1/me", setOptions())
        .then(res => res.data)
        .then(user => {
          commit(types.MUTATE_SET_USER, { user: user, auth: true });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      commit(types.MUTATE_SET_USER, { user: false, auth: false });
    }
  },
  [types.ACTION_SET_USER_TOP_ARTISTS]: async ({ commit }, status) => {
    if (status) {
      await axios
        .get("https://api.spotify.com/v1/me/top/artists?limit=12", setOptions())
        .then(res => res.data)
        .then(artists => {
          commit(types.MUTATE_SET_USER_TOP_ARTISTS, artists.items);
        });
    } else {
      commit(types.MUTATE_SET_USER_TOP_ARTISTS, false);
    }
  }
};
