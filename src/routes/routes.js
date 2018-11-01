import Home from "@/views/Home.vue";
import Auth from "@/views/Auth.vue";

import store from "@/store";

function verifyAuth(next) {
  const auth = store.state.auth.auth;
  if (!auth) {
    next("/");
  } else {
    next();
  }
}

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth
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
