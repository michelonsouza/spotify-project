import * as types from "@/store/types";

export default {
  [types.GETTER_ARTIST]: state => state.artist,
  [types.GETTER_ARTIST_LIST]: state => state.artistList
};
