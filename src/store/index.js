import Vue from "vue";
import Vuex from "vuex";

import user from "@/store/modules/user";
import auth from "@/store/modules/auth";
import artist from "@/store/modules/artist";
import album from "@/store/modules/album";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    user,
    artist,
    album
  }
});
