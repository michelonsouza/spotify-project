<template>
  <div class="artists">
    <div class="pt-3">
      <b-row class="m-0">
        <app-page-title title="Favoritos" />
      </b-row>
    </div>
    <b-row class="m-0 text-center py-4">
      <b-col 
        cols="12" 
        md="8" 
        offset-md="2" 
        lg="6" 
        offset-lg="3">
        <b-button-group v-bind="size">
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
      name="fade" 
      mode="out-in">
      <b-row 
        v-if="artists && !loading" 
        key="artists" 
        class="m-0 py-3">
        <app-artist-card 
          v-for="artist in artists" 
          :key="artist.id" 
          :artist="artist" />
        <b-col 
          v-if="artists === true" 
          cols="12" 
          md="8" 
          offset-md="2" 
          lg="6" 
          offset-lg="3">
          <p class="h3 text-center text-white text-uppercase"><i class="far fa-grin-beam-sweat text-white" /> Você não possui artistas favoritos no momento</p>
        </b-col>
      </b-row>
      <b-row 
        v-if="albums && !loading" 
        key="albums" 
        class="m-0 py-3">
        <app-album-card 
          v-for="album in albums" 
          :key="album.id" 
          :album="album" />
        <b-col 
          v-if="albums === true" 
          cols="12" 
          md="8" 
          offset-md="2" 
          lg="6" 
          offset-lg="3">
          <p class="h3 text-center text-white text-uppercase"><i class="far fa-grin-beam-sweat text-white" /> Você não possui álbuns favoritos no momento</p>
        </b-col>
      </b-row>
      <b-row 
        v-if="tracks && !loading" 
        key="tracks" 
        class="m-0 py-3">
        <app-track-card 
          v-for="track in tracks" 
          :key="track.id" 
          :track="track" />
        <b-col 
          v-if="tracks === true" 
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
import PageTitle from "@/components/PageTitle.vue";
import ArtistCard from "@/components/ArtistCard.vue";
import AlbumCard from "@/components/AlbumCard.vue";
import TrackCard from "@/components/TrackCard.vue";
import LoadingIcon from "@/components/LoadingIcon.vue";

export default {
  name: "Artists",
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
      loading: false
    };
  },
  computed: {
    size() {
      const width = window.innerWidth;
      if (width <= 576) {
        return {};
      } else {
        return { size: "lg" };
      }
    }
  },
  methods: {
    show(value) {
      const artists = JSON.parse(localStorage.getItem("artists"));
      const albums = JSON.parse(localStorage.getItem("albums"));
      const tracks = JSON.parse(localStorage.getItem("tracks"));
      this.loading = true;

      switch (value) {
        case "artists":
          this.artists = artists ? artists : true;
          this.albums = false;
          this.tracks = false;
          break;
        case "albums":
          (this.albums = albums ? albums : true), (this.artists = false);
          this.tracks = false;
          break;
        case "tracks":
          (this.tracks = tracks ? tracks : true), (this.artists = false);
          this.albums = false;
          break;
        default:
          this.artists = false;
          this.albums = false;
          this.tracks = false;
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
