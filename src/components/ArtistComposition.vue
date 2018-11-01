<template>
  <div>
    <p 
      :class="{ size, [color]: color, 'mb-xl-4': desc }" 
      class="mb-2"><i class="fas fa-microphone-alt text-primary" /><b>&nbsp;&nbsp;Gênero(s):</b>
      <b-badge 
        v-for="(genre, index) in filteredGenres" 
        :key="`${genre + index}`" 
        variant="primary" 
        class="ml-1">{{ genre }}</b-badge> {{ limit ? '...' : '' }}
    </p>
    <p 
      :class="{ size, [color]: color, 'mb-xl-4': desc }" 
      class="mb-2"><i class="far fa-thumbs-up text-primary" /><b> Seguidores:</b> {{ artist.followers.total }}</p>
    <p 
      :class="{ size, [color]: color, 'mb-xl-4': desc }" 
      class="mb-2"><i class="fas fa-fire text-primary" /><b>&nbsp;&nbsp;Popularidade:</b> {{ popularity }}</p>
  </div>
</template>

<script>
import mixin from "@/mixins/artists.mixin";
import mixinConposition from "@/mixins/composition.mixin";

export default {
  name: "ArtistComposition",
  mixins: [mixin, mixinConposition],
  props: {
    artist: {
      type: Object,
      required: true
    }
  },
  computed: {
    filteredGenres() {
      if (this.limit) {
        return this.genres.filter((genre, index) => index < 2);
      } else {
        return this.genres;
      }
    }
  }
};
</script>

<style>
</style>
