<template>
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
          sm="6" 
          lg="4" 
          class="pb-3 pb-md-0 text-center text-sm-left">
          <b-img 
            :fluid="true" 
            :src="imgUrl" 
            rounded 
            class="artist-img" />
        </b-col>
        <b-col 
          cols="10" 
          offset="1" 
          offset-sm="0" 
          sm="6" 
          lg="8">
          <h4 class="text-white">{{ name }}</h4>
          <slot />
          <app-favorite-button 
            :object="object" 
            :type="type" 
            color="text-white" />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import FavoriteButton from "@/components/FavoriteButton.vue";
import mixin from "@/mixins/generic.mixin";

export default {
  name: "Description",
  components: {
    appFavoriteButton: FavoriteButton
  },
  mixins: [mixin],
  props: {
    object: {
      type: Object,
      require: true,
      default: () => {}
    },
    type: {
      type: String,
      require: true,
      default: () => ""
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

.artist-img {
  border: 1.5px solid var(--primary);
}
</style>
