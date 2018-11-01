<template>
  <app-card 
    :md="4" 
    :lg="4" 
    :xl="3" 
    :object="track" 
    type="tracks">
    <app-track-composition 
      :object="track" 
      :limit="true" />
  </app-card>
</template>

<script>
import Card from "@/components/Card.vue";
import TrackComposition from "@/components/TrackComposition.vue";

export default {
  name: "TrackCard",
  components: {
    appCard: Card,
    appTrackComposition: TrackComposition
  },
  props: {
    track: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
