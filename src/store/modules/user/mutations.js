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
  [types.MUTATE_SET_USER]: (state, auth) => {
    if (auth) {
      axios
        .get("https://api.spotify.com/v1/me", setOptions())
        .then(res => res.data)
        .then(user => {
          state.user = user;
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      state.user = false;
    }
  },
  [types.MUTATE_SET_USER_TOP_ARTISTS]: state => {
    axios
      .get("https://api.spotify.com/v1/me/top/artists?limit=12", setOptions())
      .then(res => res.data)
      .then(artists => {
        state.userTopArtists = artists.items;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
