import * as types from "@/store/types";
import axios from "axios";

export default {
  [types.ACTION_SET_ALBUM]: async ({ commit }, { album, status }) => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };

    if (status) {
      await axios
        .get(album.href, options)
        .then(res => res.data)
        .then(item => {
          commit(types.MUTATE_SET_ALBUM, item);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      commit(types.MUTATE_SET_ALBUM, album);
    }
  },
  [types.ACTION_SET_ALBUM_LIST]: ({ commit }, { albumList, status }) => {
    if (status) {
      commit(types.MUTATE_SET_ALBUM_LIST, albumList);
    } else {
      commit(types.MUTATE_SET_ALBUM_LIST, false);
    }
  }
};
