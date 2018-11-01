<template>
  <b-row>
    <b-col cols="12">
      <h2 class="text-center text-white">Aproveite o Melhor da Vida. Encontre artistas, albuns e músicas que você mais gosta no <img 
        src="../assets/vuefy_music_logo_415x68.png" 
        style="height: 2rem;" 
        alt="Vuefy | Music">&nbsp;!</h2>
    </b-col>
    <b-col 
      v-if="auth" 
      cols="12" 
      md="6" 
      offset-md="3" 
      class="py-4">
      <h2 class="text-center text-white display-name">Toplist de <br class="d-none d-md-block"><b>{{ user.display_name }}</b></h2>
    </b-col>
    <b-col 
      v-else 
      class="py-4">
      <h3 class="text-center text-white">Conecte-se ao Spotify para aproveitar nossos serviços.</h3>
      <p class="text-center mt-5">
        <app-home-login-button />
      </p>
    </b-col>
  </b-row>
</template>

<script>
import * as types from "@/store/types";
import { mapGetters } from "vuex";
import HomeLoginButton from "@/components/HomeLoginButton.vue";

export default {
  name: "AppHomeBanner",
  components: {
    appHomeLoginButton: HomeLoginButton
  },
  computed: {
    ...mapGetters({
      user: types.GETTER_USER,
      auth: types.GETTER_AUTH
    })
  }
};
</script>

<style lang="scss" scoped>
.display-name {
  &::before {
    content: "";
    border: 3px solid var(--pink);
    position: absolute;
    bottom: 1rem;
    left: 25%;
    width: 50%;
    text-align: center;
  }
}
</style>
