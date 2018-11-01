import * as types from "@/store/types";

export default {
  [types.GETTER_ALBUM]: state => state.album,
  [types.GETTER_ALBUM_LIST]: state => state.albumList
};
