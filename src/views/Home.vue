<template>
  <div class="home">
    <b-container>
      <app-home-banner />
    </b-container>
    <transition 
      name="fade" 
      mode="out-in">
      <b-row 
        v-if="loading" 
        key="loading" 
        class="m-0 py-3">
        <b-container class="text-center">
          <app-loading-icon />
        </b-container>
      </b-row>
      <b-row 
        v-if="auth && !loading" 
        class="m-0 px-2">
        <app-artist-card 
          v-for="artist in topArtists" 
          :key="artist.id" 
          :artist="artist" />
      </b-row>
    </transition>
  </div>
</template>

<script>
import * as types from "@/store/types";
import { mapGetters } from "vuex";
import mixin from "@/mixins/views.mixin";
import ArtistCard from "@/components/ArtistCard.vue";
import HomeBanner from "@/components/HomeBanner.vue";
import LoadingIcon from "@/components/LoadingIcon.vue";

export default {
  name: "Home",
  components: {
    appArtistCard: ArtistCard,
    appHomeBanner: HomeBanner,
    appLoadingIcon: LoadingIcon
  },
  mixins: [mixin],
  computed: {
    ...mapGetters({
      topArtists: [types.GETTER_USER_TOP_ARTISTS],
      auth: [types.GETTER_AUTH]
    })
  },
  created() {
    if (!this.auth) {
      this.loading = false;
    } else {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
};
</script>
