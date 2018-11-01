<template>
  <div class="artist-description">
    <b-row class="m-0 py-4 bg-light-dark">
      <b-col cols="12" md="8" offset-md="2" lg="6" offset-lg="3">
        <b-row>
          <b-col cols="12" sm="5" lg="3" class="pb-3 pb-md-0 text-center text-sm-left">
            <b-img :fluid="true" :src="imgUrl" rounded class="artist-img" />
          </b-col>
          <b-col cols="12" sm="7" lg="9">
            <h2 class="text-white">{{ album.name }}</h2>
            <p class="text-white h6 my-3"><i class="fas fa-feather-alt text-primary" /> Participantes: {{ participants }}</p>
            <p class="text-white h6 my-3"><i class="fas fa-check text-primary" /><b> Disponibilidade:</b> {{ availability }}</p>
            <p class="text-white h6 my-3"><i class="fas fa-calendar-alt text-primary" /><b> Lançamento:</b> {{ releaseDate }}</p>
            <app-favorite-button :object="album" type="albums" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="m-0 py-3 bg-light-white">
      <app-page-title title="Músicas" color="text-dark" />
    </b-row>
    <b-row class="m-0 py-3 bg-light-white">
      <b-col cols="12" sm="10" offset-sm="1" md="8" offset-md="2" lg="6" offset-lg="3">
        <p v-for="track in tracks" :key="track.id" class="">
          <i class="fas fa-hashtag text-primary" /> {{ track.track_number }} - <b>{{ track.name }}</b> - <b>{{ timeCalc(track.duration_ms) }}</b>
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import * as types from "@/store/types";
import FavoriteButton from "@/components/FavoriteButton.vue";
import PageTitle from "@/components/PageTitle.vue";
import AlbumCard from "@/components/AlbumCard.vue";

export default {
  name: "ArtistDescription",
  components: {
    appFavoriteButton: FavoriteButton,
    appPageTitle: PageTitle,
    appAlbumCard: AlbumCard
  },
  computed: {
    album() {
      return this.$store.getters[types.GETTER_ALBUM];
    },
    participants() {
      if (this.album.artists.lenght > 1) {
        let artists = "";
        this.artists.forEach((artist, index) => {
          artists += artist.name;
          if (index < this.artists.length) {
            artists += ", ";
          }
        });
        return artists;
      } else {
        return this.album.artists[0].name;
      }
    },
    availability() {
      const available_markets = this.album.available_markets.filter(
        market => market === "BR"
      );
      if (available_markets.length === 0) {
        return "Não Disponível";
      }
      return "Disponível";
    },
    tracks() {
      return this.album.tracks.items;
    },
    artists(track) {
      const artists = track.artists;
      if (artists.lenght > 1) {
        return artists.reduce((a, b) => {
          a.name + (", " + b.name);
        });
      } else {
        return artists[0].name;
      }
    },
    releaseDate() {
      const date = this.album.release_date
        .split("-")
        .reverse()
        .join("/");
      return date;
    },
    imgUrl() {
      return this.album.images[1]
        ? this.album.images[1].url
        : require("../assets/no-image.jpg");
    }
  },
  destroyed() {
    this.$store.dispatch(types.ACTION_SET_ALBUM, {
      album: false,
      status: false
    });
  },
  methods: {
    timeCalc(time) {
      const duration = new Date(time);
      return `${duration.getMinutes()}:${duration.getSeconds()}`;
    }
  }
};
</script>

<style scoped>
.bg-light-dark {
  background-color: rgba(0, 0, 0, 0.8);
}

.bg-light-white {
  background-color: rgba(255, 255, 255, 0.8);
}

i.fas {
  color: var(--pink);
}

.artist-img {
  border: 2px solid var(--pink);
}
</style>
