<template>
  <div class="artists pt-5 mt-3">
    <b-row class="m-0">
      <app-page-title title="Músicas" />
    </b-row>
    <b-row class="m-0">
      <app-search 
        type="track" 
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
            v-if="!notFound && tracks && showSearch" 
            class="text-center text-white h4">Resultado da busca para <b class="text-light bg-primary px-2">{{ searchText }}</b></p>
        </b-container>
      </b-row>
      <b-row 
        v-if="tracks && showSearch" 
        key="tracks" 
        class="m-0 py-3">
        <app-track-card 
          v-for="track in tracks" 
          :key="track.id" 
          :track="track" />
      </b-row>
      <b-row 
        v-if="loading" 
        key="loading" 
        class="m-0 py-3">
        <b-container class="text-center">
          <app-loading-icon />
        </b-container>
      </b-row>
    </transition-group>
  </div>
</template>

<script>
import * as types from "@/store/types";
import Search from "@/components/Search.vue";
import PageTitle from "@/components/PageTitle.vue";
import TrackCard from "@/components/TrackCard.vue";
import LoadingIcon from "@/components/LoadingIcon.vue";

export default {
  name: "Albums",
  components: {
    appSearch: Search,
    appPageTitle: PageTitle,
    appTrackCard: TrackCard,
    appLoadingIcon: LoadingIcon
  },
  data() {
    return {
      tracks: false,
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
  created() {
    this.$store.dispatch(types.ACTION_VERIFY_LOGIN_ENTER);
  },
  methods: {
    setData(returnVal) {
      this.tracks = returnVal.data.tracks.items;
      this.searchText = returnVal.value;

      this.showSearch = false;
      this.loading = true;

      console.log(this.tracks);

      setTimeout(() => {
        if (this.tracks.length === 0) {
          this.notFound = true;
          this.showSearch = false;
        } else {
          this.notFound = false;
          this.showSearch = true;
        }
        this.loading = false;
      }, 2000);
    }
  }
};
</script>

<style>
</style>
