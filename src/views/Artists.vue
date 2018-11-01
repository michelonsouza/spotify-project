<template>
  <div class="artists">
    <app-page-header 
      type="artist" 
      page-title="Artistas" 
      @searched="show" 
      @clean="loading = true" />

    <transition 
      name="fade" 
      mode="out-in">
      <b-row 
        v-if="!loading && artistList && !artist" 
        key="artist-list" 
        class="mx-0 mt-3">
        <app-artist-card 
          v-for="artist in artistList" 
          :key="artist.id" 
          :artist="artist" />
      </b-row>
      <app-general-description 
        v-else 
        key="general-description" 
        :object="artist" 
        type="artist" 
        desc-title="Álbuns" 
        class="mt-4" />
    </transition>
  </div>
</template>

<script>
import * as types from "@/store/types";
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader.vue";
import GeneralDescription from "@/components/GeneralDescription.vue";
import ArtistCard from "@/components/ArtistCard.vue";

export default {
  name: "Artists",
  components: {
    appPageHeader: PageHeader,
    appArtistCard: ArtistCard,
    appGeneralDescription: GeneralDescription
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapGetters({
      artistList: types.GETTER_ARTIST_LIST,
      artist: types.GETTER_ARTIST
    })
  },
  methods: {
    show() {
      this.loading = false;
    }
  }
};
</script>

<style>
</style>
