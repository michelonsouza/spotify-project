import * as types from "@/store/types";
import axios from "axios";

export default {
  [types.MUTATE_SET_ARTIST]: (state, { artist, status }) => {
    if (status) {
      const artistDescription = artist;
      const options = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };

      axios
        .get(`${artist.href}/albums?limit=5`, options)
        .then(res => res.data)
        .then(data => {
          artistDescription.albums = data.items;
          state.artist = artistDescription;
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      state.artist = false;
    }
  }
};
