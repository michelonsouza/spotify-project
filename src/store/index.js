import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth";
import user from "./modules/user";
import artists from "./modules/artists";
import albums from "./modules/albums";
import tracks from "./modules/tracks";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    user,
    artists,
    albums,
    tracks
  }
});
