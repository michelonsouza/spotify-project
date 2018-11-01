<template>
  <div class="albums">
    <app-page-header 
      type="album" 
      page-title="Álbuns" 
      @searched="show" 
      @clean="loading = true" />
    <transition 
      name="fade" 
      mode="out-in">
      <b-row 
        v-if="!loading && albumList && !album" 
        key="album-list" 
        class="mx-0 mt-3">
        <app-album-card 
          v-for="album in albumList" 
          :key="album.id" 
          :album="album" />
      </b-row>
      <app-general-description 
        v-if="album" 
        key="general-description" 
        :object="album" 
        type="album" 
        desc-title="Músicas" 
        class="my-4" />
    </transition>
  </div>
</template>

<script>
import * as types from "@/store/types";
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader.vue";
import GeneralDescription from "@/components/GeneralDescription.vue";
import AlbumCard from "@/components/AlbumCard.vue";
import LoagingIcon from "@/components/LoadingIcon.vue";

export default {
  name: "Albums",
  components: {
    appGeneralDescription: GeneralDescription,
    appPageHeader: PageHeader,
    appAlbumCard: AlbumCard,
    appLoagingIcon: LoagingIcon
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapGetters({
      albumList: types.GETTER_ALBUM_LIST,
      album: types.GETTER_ALBUM
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
