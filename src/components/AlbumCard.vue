<template>
  <app-card-grid 
    :md="4" 
    :lg="3" 
    :xl="3">
    <b-card 
      :img-src="imgUrl" 
      tag="article" 
      @click="albumEmit">
      <h5 class="card-title">{{ album.name }}</h5>
      <p class="my-1"><small><i class="fas fa-feather-alt text-primary"/> <b>Participantes:</b> {{ participants }}</small></p>
      <p class="my-1"><small><i class="fas fa-check text-primary"/><b> Disponibilidade:</b> {{ availability }}</small></p>
      <p class="my-1"><small><i class="fas fa-calendar-alt text-primary"/><b> Lançamento:</b> {{ releaseDate }}</small></p>
    </b-card>
  </app-card-grid>
</template>

<script>
import * as types from "@/store/types";
import CardGrid from "@/components/CardGrid.vue";

export default {
  name: "AlbumCard",
  components: {
    appCardGrid: CardGrid
  },
  props: {
    album: {
      type: Object,
      required: true
    }
  },
  computed: {
    participants() {
      if (this.album.artists.lenght > 1) {
        return "Vários artistas";
      } else {
        return this.album.artists[0].name;
      }
    },
    availability() {
      const availableMarkets = this.album.available_markets.filter(
        market => market === "BR"
      );
      if (availableMarkets.length === 0) {
        return "Não Disponível";
      }
      return "Disponível";
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
  methods: {
    albumEmit() {
      const album = {
        album: this.album,
        status: true
      };

      this.$store.dispatch(types.ACTION_SET_ALBUM, album).then(() => {
        this.$emit("albumEmit", this.album);
        this.$router.push("/albuns");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  border: 2px solid var(--pink);
  .card-img {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
