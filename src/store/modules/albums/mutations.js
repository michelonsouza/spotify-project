import * as types from "@/store/types";

export default {
  [types.MUTATE_SET_ALBUM]: (state, album) => {
    state.album = album;
  },
  [types.MUTATE_SET_ALBUM_LIST]: (state, albumList) => {
    state.albumList = albumList;
  }
};
