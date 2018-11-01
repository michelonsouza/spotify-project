<template>
  <div class="artist-description">
    <b-row class="m-0 py-4 bg-light-dark">
      <b-col 
        cols="12" 
        md="8" 
        offset-md="2" 
        lg="6" 
        offset-lg="3">
        <b-row>
          <b-col 
            cols="12" 
            sm="5" 
            lg="3" 
            class="pb-3 pb-md-0 text-center text-sm-left">
            <b-img 
              :fluid="true" 
              :src="imgUrl" 
              rounded 
              class="artist-img" />
          </b-col>
          <b-col 
            cols="12" 
            sm="7" 
            lg="9">
            <h2 class="text-white">{{ artist.name }}</h2>
            <p class="text-white h6 my-3"><i class="fas fa-microphone-alt text-primary"/> Gênero: {{ genres }}</p>
            <p class="text-white h6 my-3"><i class="fas fa-hands text-primary"/> Seguidores: {{ artist.followers.total }}</p>
            <p class="text-white h6 my-3"><i class="fas fa-fire text-primary"/> Popularidade: {{ popularity }}</p>
            <app-favorite-button 
              :object="artist" 
              type="artists" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="m-0 py-3 bg-light-white">
      <app-page-title 
        title="Álbuns" 
        color="text-dark" />
    </b-row>
    <b-row class="m-0 py-3 bg-light-white">
      <app-album-card 
        v-for="album in albums" 
        :key="album.id" 
        :album="album" />
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
    artist() {
      return this.$store.getters[types.GETTER_ARTIST];
    },
    popularity() {
      const pop = this.artist.popularity;
      if (pop > 80) {
        return "Top";
      } else if (pop > 59 && pop < 80) {
        return "Legal";
      } else if (pop > 29 && pop < 60) {
        return "Bom";
      } else {
        return "Desconhecido";
      }
    },
    genres() {
      return this.artist.genres.join(", ");
    },
    imgUrl() {
      return this.artist.images[1]
        ? this.artist.images[1].url
        : require("../assets/no-image.jpg");
    },
    albums() {
      return this.artist.albums;
    }
  },
  destroyed() {
    this.$store.dispatch(types.ACTION_SET_ARTIST, {
      artist: false,
      status: false
    });
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
