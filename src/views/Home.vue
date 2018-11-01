<template>
  <div class="home py-5 mt-5">
    <b-container>
      <app-home-banner />
    </b-container>
    <section>
      <transition name="slide" mode="out-in">
        <b-row v-if="loading" key="loading" class="m-0 py-3">
          <b-container class="text-center">
            <app-loading-icon />
          </b-container>
        </b-row>
        <b-row v-if="auth && !loading" class="pt-4 m-0">
          <app-artist-card v-for="artist in artists" :key="artist.id" :artist="artist" />
        </b-row>
      </transition>
    </section>
  </div>
</template>

<script>
import * as types from "@/store/types";
import { mapGetters, mapActions } from "vuex";
import HomeBanner from "@/components/HomeBanner.vue";
import ArtistCard from "@/components/ArtistCard.vue";
import LoadingIcon from "@/components/LoadingIcon.vue";

export default {
  name: "Home",
  components: {
    appHomeBanner: HomeBanner,
    appArtistCard: ArtistCard,
    appLoadingIcon: LoadingIcon
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapGetters({
      artists: [types.GETTER_USER_TOP_ARTISTS],
      auth: [types.GETTER_AUTH]
    })
  },
  created() {
    this.verifyLogin().then(() => {
      if (!this.auth) {
        this.loading = false;
      }
      this.getTopArtists();
    });
  },
  methods: {
    ...mapActions({
      user: types.ACTION_SET_USER,
      topArtists: types.ACTION_SET_USER_TOP_ARTISTS,
      verifyLogin: types.ACTION_VERIFY_LOGIN_ENTER
    }),
    getTopArtists() {
      if (this.auth) {
        this.user();
        this.topArtists();
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }
    }
  }
};
</script>
