<template>
  <app-card-grid 
    :md="4" 
    :lg="3" 
    :xl="3">
    <b-card 
      :img-src="imgUrl" 
      tag="article">
      <h5 class="card-title">{{ track.name }}</h5>
      <p class="my-1"><small><i class="fas fa-feather-alt text-primary" /> <b>Participantes:</b> {{ participants }}</small></p>
      <p class="my-1"><small><i class="fas fa-hashtag text-primary" /><b> Número da música no álbum:</b> {{ track.track_number }}</small></p>
      <p class="my-1"><small><i class="far fa-clock text-primary" /><b> Duração:</b> {{ timeCalc(track.duration_ms) }}</small></p>
      <p class="my-1">
        <small>
          <app-favorite-button 
            :object="track" 
            type="tracks" 
            color="text-dark" />
        </small>
      </p>
    </b-card>
  </app-card-grid>
</template>

<script>
import CardGrid from "@/components/CardGrid.vue";
import FavoriteButton from "@/components/FavoriteButton.vue";

export default {
  name: "AlbumCard",
  components: {
    appCardGrid: CardGrid,
    appFavoriteButton: FavoriteButton
  },
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  computed: {
    participants() {
      if (this.track.artists.lenght > 1) {
        let artists = "";
        artists = this.track.artists.reduce((a, b) => {
          return a.name + `, ${b.name}`;
        });
        return artists;
      } else {
        return this.track.artists[0].name;
      }
    },
    imgUrl() {
      if (this.track.album) {
        return this.track.album.images[1]
          ? this.track.album.images[1].url
          : require("../assets/no-image.jpg");
      } else {
        return require("../assets/no-image.jpg");
      }
    }
  },
  methods: {
    trackEmit() {
      this.$emit("albumEmit", this.track);
      this.$router.push("/musicas");
    },
    timeCalc(time) {
      const duration = new Date(time);
      return `${duration.getMinutes()}:${duration.getSeconds()}`;
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
