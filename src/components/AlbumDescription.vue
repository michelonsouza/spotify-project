<template>
  <div v-if="album">
    <app-description 
      :object="album" 
      type="albums">
      <app-album-composition 
        :album="album" 
        :color="`text-white`" 
        :desc="true" />
    </app-description>
    <app-description-white>
      <app-page-title 
        color="text-dark" 
        title="Álbuns" />
      <b-col 
        cols="12" 
        md="3" />
      <app-album-card 
        v-for="album in album.albums" 
        :album="album" 
        :key="album.id" />
    </app-description-white>
  </div>
</template>

<script>
import * as types from "@/store/types";
import Description from "@/components/Description.vue";
import AlbumComposition from "@/components/AlbumComposition.vue";
import AlbumCard from "@/components/AlbumCard.vue";
import DescriptionWhite from "@/components/DescriptionWhite.vue";
import PageTitle from "@/components/PageTitle.vue";

export default {
  name: "AlbumsDescrition",
  components: {
    appDescription: Description,
    appAlbumComposition: AlbumComposition,
    appAlbumCard: AlbumCard,
    appDescriptionWhite: DescriptionWhite,
    appPageTitle: PageTitle
  },
  computed: {
    album() {
      return this.$store.getters[types.GETTER_ALBUM];
    }
  },
  destroyed() {
    this.$store.dispatch(types.ACTION_SET_ALBUM, {
      album: false,
      status: false
    });
  }
};
</script>

<style>
</style>
