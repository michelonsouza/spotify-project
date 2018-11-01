<template>
  <header class="menu mb-5">
    <b-navbar 
      toggleable="md" 
      type="dark" 
      class="bg-header" 
      fixed="top">
      <b-navbar-toggle target="nav_collapse"/>
      <router-link 
        to="/" 
        exact><img 
          src="@/assets/vuefy_music_logo_415x68.png" 
          alt="Vuefy | Music" 
          class="logo"></router-link>

      <b-collapse 
        v-if="route" 
        id="nav_collapse" 
        is-nav 
        class="bg-light-dark p-2">
        <b-navbar-nav class="ml-auto">
          <router-link 
            v-if="auth" 
            to="/artistas" 
            tag="li" 
            active-class="active" 
            class="nav-item text-uppercase py-1"><a class="nav-link">Artistas</a></router-link>
          <router-link 
            v-if="auth" 
            to="/albuns" 
            tag="li" 
            active-class="active" 
            class="nav-item text-uppercase py-1"><a class="nav-link">Álbuns</a></router-link>
          <router-link 
            v-if="auth" 
            to="/musicas" 
            tag="li" 
            active-class="active" 
            class="nav-item text-uppercase py-1"><a class="nav-link">Músicas</a></router-link>
          <router-link 
            v-if="auth" 
            to="/favoritos" 
            tag="li" 
            active-class="active" 
            class="nav-item text-uppercase py-1" 
            exact><a class="nav-link">Favoritos</a></router-link>

          <b-navbar 
            right 
            class="py-1 pl-0 pl-lg-3">
            <b-btn 
              v-if="auth" 
              variant="primary" 
              size="lg" 
              class="login  ml-md-2 mt-md-0" 
              @click="logout"><i class="fab fa-spotify"/>&nbsp;&nbsp;Sair do Spotify</b-btn>
            <b-btn 
              v-else 
              variant="primary" 
              size="lg" 
              class="login  ml-md-2 mt-md-0" 
              @click="login"><i class="fab fa-spotify"/>&nbsp;&nbsp;Entrar no spotify</b-btn>
          </b-navbar>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import * as types from "@/store/types";
import { mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: {
    ...mapGetters([types.GETTER_AUTH, types.GETTER_USER]),
    auth() {
      return this[types.GETTER_AUTH];
    },
    route() {
      return this.$route.path !== "/auth";
    }
  },
  methods: {
    logout() {
      this.$store
        .dispatch(types.ACTION_SET_AUTH, false)
        .then(() => {
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
    },
    login() {
      this.$router.push("/auth");
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-light-dark {
  background-color: rgba(0, 0, 0, 0.7);
  @media screen and(min-width: 768px) {
    background-color: transparent;
  }
}

.bg-header {
  background-color: rgba(0, 0, 0, 0.5);
}

.avatar {
  width: 55px;
  height: 55px;
}

.logo {
  height: 40px;
  width: auto;
  @media screen and (max-width: 576px) {
    height: 30px;
  }
}

.nav-item {
  &:before {
    content: "";
    border: 3px solid transparent;
    margin-top: 5px;
    width: 0;
    position: absolute;
    transition: width 250ms ease;
    bottom: 0.5rem;
    margin-left: 8px;
  }

  &.active {
    position: relative;
    a {
      color: var(--pink) !important;
    }

    &:before {
      content: "";
      border-color: var(--pink);
      // margin-top: 5px;
      width: 50px;
    }
  }
}
</style>
