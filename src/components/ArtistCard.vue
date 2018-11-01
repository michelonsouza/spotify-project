<template>
  <app-card 
    :md="4" 
    :lg="4" 
    :xl="3" 
    :object="artist" 
    type="artists" 
    @artistsEmit="emit">
    <app-artist-composition 
      :artist="artist" 
      :limit="true" />
  </app-card>
</template>

<script>
import * as types from "@/store/types";
import Card from "@/components/Card.vue";
import ArtistComposition from "@/components/ArtistComposition.vue";

export default {
  name: "ArtistCard",
  components: {
    appCard: Card,
    appArtistComposition: ArtistComposition
  },
  props: {
    artist: {
      type: Object,
      required: true
    }
  },
  methods: {
    emit(artist) {
      this.$store
        .dispatch(types.ACTION_SET_ARTIST, { artist: artist, status: true })
        .then(() => {
          this.$router.push("/artistas");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>
