import * as types from "@/store/types";

export default {
  [types.MUTATE_SET_ARTIST]: (state, artist) => {
    state.artist = artist;
  },
  [types.MUTATE_SET_ARTIST_LIST]: (state, artistList) => {
    state.artistList = artistList;
  }
};
