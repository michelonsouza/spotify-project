import * as types from "@/store/types";
import Home from "@/views/Home.vue";

import store from "@/store";

async function verifyAuth(next) {
  await store.dispatch(types.ACTION_VERIFY_LOGIN_ENTER);
  next();
}

export default [
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter(to, from, next) {
      verifyAuth(next);
    }
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/Auth.vue")
  },
  {
    path: "/artistas",
    name: "artists",
    component: () => import("@/views/Artists.vue"),
    beforeEnter(to, from, next) {
      verifyAuth(next);
    }
  },
  {
    path: "/albuns",
    name: "albums",
    component: () => import("@/views/Albums.vue"),
    beforeEnter(to, from, next) {
      verifyAuth(next);
    }
  },
  {
    path: "/musicas",
    name: "tracks",
    component: () => import("@/views/Tracks.vue"),
    beforeEnter(to, from, next) {
      verifyAuth(next);
    }
  },
  {
    path: "/favoritos",
    name: "favorites",
    component: () => import("@/views/Favorites.vue"),
    beforeEnter(to, from, next) {
      verifyAuth(next);
    }
  }
];
