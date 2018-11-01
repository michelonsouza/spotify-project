<template>
  <app-card-grid 
    :md="4" 
    :lg="4" 
    :xl="3">
    <b-card 
      :img-src="imgUrl" 
      tag="article" 
      @click="artistEmit">
      <h5 class="card-title">{{ name }}</h5>
      <p class="my-1"><small><i class="fas fa-microphone-alt text-primary" /> Gênero: {{ genres }}</small></p>
      <p class="my-1"><small><i class="fas fa-hands text-primary" /> Seguidores: {{ artist.followers.total }}</small></p>
      <p class="my-1"><small><i class="fas fa-fire text-primary" /> Popularidade: {{ popularity }}</small></p>
    </b-card>
  </app-card-grid>
</template>

<script>
import * as types from "@/store/types";
import CardGrid from "@/components/CardGrid.vue";

export default {
  name: "AppArtistCard",
  components: {
    appCardGrid: CardGrid
  },
  props: {
    artist: {
      type: Object,
      require: true,
      default: function(value) {
        return value || false;
      }
    }
  },
  computed: {
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
      if (this.artist.genres.length > 0) {
        return (
          this.artist.genres.filter((genre, index) => index < 2).join(", ") +
          ", ..."
        );
      } else {
        return "Indefinido";
      }
    },
    imgUrl() {
      return this.artist.images[1]
        ? this.artist.images[1].url
        : require("../assets/no-image.jpg");
    },
    name() {
      const namesVirg = this.artist.name.split(",");
      const namesSlash = this.artist.name.split("/");

      if (namesVirg.length > 1 || namesSlash.length > 1) {
        return "Varios Artistas";
      } else {
        return this.artist.name;
      }
    }
  },
  methods: {
    artistEmit() {
      const artist = {
        artist: this.artist,
        status: true
      };

      this.$store.dispatch(types.ACTION_SET_ARTIST, artist).then(() => {
        this.$emit("artistEmit", this.artist);
        this.$router.push("/artistas");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  border: 2px solid var(--pink);
  cursor: pointer;
  .card-img {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
