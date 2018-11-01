<template>
  <div class="artists pt-5 mt-3">
    <b-row class="m-0">
      <app-page-title title="Favoritos" />
    </b-row>
    <b-row class="m-0 text-center py-4">
      <b-col 
        cols="12" 
        md="8" 
        offset-md="2" 
        lg="6" 
        offset-lg="3">
        <b-button-group v-if="windowWidth">
          <b-button 
            :class="{active: artists}" 
            variant="primary text-uppercase" 
            @click="show('artists')">Artistas</b-button>
          <b-button 
            :class="{active: albums}" 
            variant="primary text-uppercase" 
            @click="show('albums')">Álbuns</b-button>
          <b-button 
            :class="{active: tracks}" 
            variant="primary text-uppercase" 
            @click="show('tracks')">Músicas</b-button>
        </b-button-group>
        <b-button-group 
          v-if="!windowWidth" 
          size="lg">
          <b-button 
            :class="{active: artists}" 
            variant="primary text-uppercase" 
            @click="show('artists')">Artistas</b-button>
          <b-button 
            :class="{active: albums}" 
            variant="primary text-uppercase" 
            @click="show('albums')">Álbuns</b-button>
          <b-button 
            :class="{active: tracks}" 
            variant="primary text-uppercase" 
            @click="show('tracks')">Músicas</b-button>
        </b-button-group>
      </b-col>
    </b-row>
    <transition-group 
      name="slide" 
      mode="out-in">
      <b-row 
        v-if="artistsShow && !loading" 
        key="artists" 
        class="m-0 py-3">
        <app-artist-card 
          v-for="artist in artists" 
          :key="artist.id" 
          :artist="artist" />
        <b-col 
          v-if="!artists && artistsShow" 
          cols="12" 
          md="8" 
          offset-md="2" 
          lg="6" 
          offset-lg="3">
          <p class="h3 text-center text-white text-uppercase"><i class="far fa-grin-beam-sweat text-white" /> Você não possui artistas favoritos no momento</p>
        </b-col>
      </b-row>
      <b-row 
        v-if="albumsShow && !loading" 
        key="albums" 
        class="m-0 py-3">
        <app-album-card 
          v-for="album in albums" 
          :key="album.id" 
          :album="album" />
        <b-col 
          v-if="!albums && albumsShow" 
          cols="12" 
          md="8" 
          offset-md="2" 
          lg="6" 
          offset-lg="3">
          <p class="h3 text-center text-white text-uppercase"><i class="far fa-grin-beam-sweat text-white" /> Você não possui álbuns favoritos no momento</p>
        </b-col>
      </b-row>
      <b-row 
        v-if="tracksShow && !loading" 
        key="tracks" 
        class="m-0 py-3">
        <app-track-card 
          v-for="track in tracks" 
          :key="track.id" 
          :track="track" />
        <b-col 
          v-if="!tracks && tracksShow" 
          cols="12" 
          md="8" 
          offset-md="2" 
          lg="6" 
          offset-lg="3">
          <p class="h3 text-center text-white text-uppercase"><i class="far fa-grin-beam-sweat text-white" /> Você não possui músicas favoritas no momento</p>
        </b-col>
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
import PageTitle from "@/components/PageTitle.vue";
import ArtistCard from "@/components/ArtistCard.vue";
import AlbumCard from "@/components/AlbumCard.vue";
import TrackCard from "@/components/TrackCard.vue";
import LoadingIcon from "@/components/LoadingIcon.vue";

export default {
  name: "Favorites",
  components: {
    appPageTitle: PageTitle,
    appArtistCard: ArtistCard,
    appAlbumCard: AlbumCard,
    appTrackCard: TrackCard,
    appLoadingIcon: LoadingIcon
  },
  data() {
    return {
      artists: false,
      albums: false,
      tracks: false,
      artistsShow: false,
      albumsShow: false,
      tracksShow: false,
      showSearch: true,
      loading: false
    };
  },
  computed: {
    windowWidth() {
      const width = window.innerWidth;
      if (width <= 576) {
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
    show(value) {
      const artists = JSON.parse(localStorage.getItem("artists"));
      const albums = JSON.parse(localStorage.getItem("albums"));
      const tracks = JSON.parse(localStorage.getItem("tracks"));
      this.loading = true;
      switch (value) {
        case "artists":
          if (artists != null) {
            this.artists = artists;
          }
          this.albums = false;
          this.tracks = false;
          this.artistsShow = true;
          this.albumsShow = false;
          this.tracksShow = false;
          break;
        case "albums":
          if (albums != null) {
            this.albums = albums;
          }
          this.artists = false;
          this.tracks = false;
          this.artistsShow = false;
          this.albumsShow = true;
          this.tracksShow = false;
          break;
        case "tracks":
          if (tracks != null) {
            this.tracks = tracks;
          }
          this.albums = false;
          this.artists = false;
          this.artistsShow = false;
          this.albumsShow = false;
          this.tracksShow = true;
          break;
        default:
          this.artists = false;
          this.albums = false;
          this.tracks = false;
          this.artistsShow = false;
          this.albumsShow = false;
          this.tracksShow = false;
      }
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
};
</script>

<style>
</style>
