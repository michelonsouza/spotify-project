<template>
  <b-col 
    cols="12" 
    md="8" 
    offset-md="2" 
    lg="6" 
    offset-lg="3" 
    class="pt-3">
    <b-list-group>
      <b-list-group-item 
        v-for="track in trackList" 
        :key="track.id">
        <small><i class="fas fa-hashtag text-primary" /> <b>{{ track.track_number }}</b> - <b>{{ track.name }}</b> - {{ timeCalc(track.duration_ms) }} -
          <app-favorite-button 
            :object="track" 
            type="tracks" /></small>
      </b-list-group-item>
    </b-list-group>
  </b-col>
</template>

<script>
import mixin from "@/mixins/generic.mixin";
import FavoriteButton from "@/components/FavoriteButton.vue";

export default {
  name: "TrackListCard",
  components: {
    appFavoriteButton: FavoriteButton
  },
  mixins: [mixin],
  props: {
    trackList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.list-group-item {
  border-color: var(--primary);
}
</style>
