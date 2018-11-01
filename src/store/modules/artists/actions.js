import * as types from "@/store/types";
import axios from "axios";

export default {
  [types.ACTION_SET_ARTIST]: async ({ commit }, { artist, status }) => {
    if (status) {
      const artistDescription = artist;
      const options = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };

      await axios
        .get(`${artist.href}/albums?limit=5`, options)
        .then(res => res.data)
        .then(data => {
          artistDescription.albums = data.items;
          commit(types.MUTATE_SET_ARTIST, artistDescription);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      commit(types.MUTATE_SET_ARTIST, false);
    }
  },
  [types.ACTION_SET_ARTIST_LIST]: ({ commit }, { artistList, status }) => {
    if (status) {
      commit(types.MUTATE_SET_ARTIST_LIST, artistList);
    } else {
      commit(types.MUTATE_SET_ARTIST_LIST, false);
    }
  }
};
