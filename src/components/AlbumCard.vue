<template>
  <app-card 
    :md="4" 
    :lg="4" 
    :xl="3" 
    :object="album" 
    type="albums" 
    @albumsEmit="emit">
    <app-album-composition 
      :album="album" 
      :limit="true" />
  </app-card>
</template>

<script>
import * as types from "@/store/types";
import Card from "@/components/Card.vue";
import AlbumComposition from "@/components/AlbumComposition.vue";

export default {
  name: "AlbumCard",
  components: {
    appCard: Card,
    appAlbumComposition: AlbumComposition
  },
  props: {
    album: {
      type: Object,
      required: true
    }
  },
  methods: {
    emit(album) {
      this.$store
        .dispatch(types.ACTION_SET_ALBUM, { album, status: true })
        .then(() => {
          this.$router.push("/albuns");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>
