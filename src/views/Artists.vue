<template>
  <div class="artists pt-5 mt-3">
    <b-row class="m-0">
      <app-page-title title="Artistas" />
    </b-row>
    <b-row class="m-0">
      <app-search type="artist" @returnData="setData" />
    </b-row>
    <transition-group name="slide" mode="out-in">
      <b-row v-if="artists && showSearch" key="artists" class="m-0 py-3">
        <app-artist-card v-for="artist in artists" :key="artist.id" :artist="artist" @artistEmit="artistDescShow" />
      </b-row>
      <b-row v-if="notFound" key="not-found" class="m-0 py-3">
        <b-container>
          <p class="text-center text-white h4">Não encontramos nenhum resultado para <b>{{ searchText }}</b></p>
        </b-container>
      </b-row>
      <b-row v-if="loading" key="loading" class="m-0 py-3">
        <b-container class="text-center">
          <app-loading-icon />
        </b-container>
      </b-row>
      <app-artist-description v-if="showSearch && haveArtist" key="artistDescription" />
    </transition-group>
  </div>
</template>

<script>
import * as types from "@/store/types";
import Search from "@/components/Search.vue";
import PageTitle from "@/components/PageTitle.vue";
import ArtistCard from "@/components/ArtistCard.vue";
import LoadingIcon from "@/components/LoadingIcon.vue";
import ArtistDescription from "@/components/ArtistDescription.vue";

export default {
  name: "Artists",
  components: {
    appSearch: Search,
    appPageTitle: PageTitle,
    appArtistCard: ArtistCard,
    appLoadingIcon: LoadingIcon,
    appArtistDescription: ArtistDescription
  },
  data() {
    return {
      artists: false,
      showSearch: true,
      notFound: false,
      loading: false,
      searchText: ""
    };
  },
  computed: {
    haveArtist() {
      if (this.$store.getters[types.GETTER_ARTIST]) {
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
      this.artists = returnVal.data.artists.items;
      this.searchText = returnVal.value;

      this.showSearch = false;
      this.loading = true;
      this.notFound = false;

      setTimeout(() => {
        if (this.artists.length === 0) {
          this.notFound = true;
          this.showSearch = false;
        } else {
          this.notFound = false;
          this.showSearch = true;
        }
        this.loading = false;
      }, 2000);
    },
    artistDescShow(artist) {
      const payload = {
        artist: artist,
        status: true
      };

      this.$store.dispatch(types.ACTION_SET_ARTIST, payload).then(() => {
        this.loading = true;
        this.artists = false;
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
