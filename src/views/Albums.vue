<template>
  <div class="artists pt-5 mt-3">
    <b-row class="m-0">
      <app-page-title title="Álbuns" />
    </b-row>
    <b-row class="m-0">
      <app-search 
        type="album" 
        @returnData="setData" />
    </b-row>
    <transition-group 
      name="slide" 
      mode="out-in">
      <b-row 
        key="not-found" 
        class="m-0 py-3">
        <b-container>
          <p 
            v-if="notFound" 
            class="text-center text-white h4">Não encontramos nenhum resultado para <b class="text-light bg-primary px-2">{{ searchText }}</b></p>
          <p 
            v-if="!notFound && albums && showSearch" 
            class="text-center text-white h4">Resultado da busca para <b class="text-light bg-primary px-2">{{ searchText }}</b></p>
        </b-container>
      </b-row>
      <b-row 
        v-if="albums && showSearch" 
        key="albums" 
        class="m-0 py-3">
        <app-album-card 
          v-for="album in albums" 
          :key="album.id" 
          :album="album" 
          @albumEmit="albumDescShow" />
      </b-row>
      <b-row 
        v-if="loading" 
        key="loading" 
        class="m-0 py-3">
        <b-container class="text-center">
          <app-loading-icon />
        </b-container>
      </b-row>
      <app-album-description 
        v-if="showSearch && haveAlbum" 
        key="albumDescription" />
    </transition-group>
  </div>
</template>

<script>
import * as types from "@/store/types";
import Search from "@/components/Search.vue";
import PageTitle from "@/components/PageTitle.vue";
import AlbumCard from "@/components/AlbumCard.vue";
import LoadingIcon from "@/components/LoadingIcon.vue";
import AlbumDescription from "@/components/AlbumDescription.vue";

export default {
  name: "Albums",
  components: {
    appSearch: Search,
    appPageTitle: PageTitle,
    appAlbumCard: AlbumCard,
    appLoadingIcon: LoadingIcon,
    appAlbumDescription: AlbumDescription
  },
  data() {
    return {
      albums: false,
      showSearch: true,
      notFound: false,
      loading: false,
      searchText: ""
    };
  },
  computed: {
    haveAlbum() {
      if (this.$store.getters[types.GETTER_ALBUM]) {
        return true;
      } else {
        return false;
      }
    }
  },
  beforeCreate() {
    this.$store.dispatch(types.ACTION_VERIFY_LOGIN_ENTER);
  },
  methods: {
    setData(returnVal) {
      this.albums = returnVal.data.albums.items;
      this.searchText = returnVal.value;

      this.showSearch = false;
      this.loading = true;
      this.notFound = false;

      setTimeout(() => {
        if (this.albums.length === 0) {
          this.notFound = true;
          this.showSearch = false;
        } else {
          this.notFound = false;
          this.showSearch = true;
        }
        this.loading = false;
      }, 2000);
    },
    albumDescShow(album) {
      const payload = {
        album: album,
        status: true
      };

      this.$store.dispatch(types.ACTION_SET_ALBUM, payload).then(() => {
        this.loading = true;
        this.albums = false;
        this.showSearch = false;
        setTimeout(() => {
          this.loading = false;
          this.showSearch = true;
        }, 500);
      });
    }
  }
};
</script>

<style>
</style>
