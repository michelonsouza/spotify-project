import * as types from "@/store/types";
import axios from "axios";

export default {
  [types.MUTATE_SET_ALBUM]: (state, { album, status }) => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };

    if (status) {
      axios
        .get(album.href, options)
        .then(res => res.data)
        .then(item => {
          state.album = item;
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      state.album = false;
    }
  }
};
