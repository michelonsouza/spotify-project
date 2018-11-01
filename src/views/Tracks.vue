<template>
  <div class="tracks">
    <app-page-header 
      type="track" 
      page-title="Músicas" 
      @searched="show" 
      @clean="loading = true" />
    <transition 
      name="fade" 
      mode="out-in">
      <b-row 
        v-if="!loading && trackList && !track" 
        key="track-list" 
        class="mx-0 mt-3">
        <app-track-card 
          v-for="track in trackList" 
          :key="track.id" 
          :track="track" />
      </b-row>
    </transition>
  </div>
</template>

<script>
import * as types from "@/store/types";
import mixin from "@/mixins/views.mixin";
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader.vue";
import TrackCard from "@/components/TrackCard.vue";

export default {
  name: "Albums",
  components: {
    appPageHeader: PageHeader,
    appTrackCard: TrackCard
  },
  mixins: [mixin],
  computed: {
    ...mapGetters({
      trackList: types.GETTER_TRACK_LIST,
      track: types.GETTER_TRACK
    })
  },
  destroyed() {
    this.$store.dispatch(types.ACTION_SET_TRACK, {
      track: false,
      status: false
    });
    this.$store.dispatch(types.ACTION_SET_TRACK_LIST, {
      trackList: false,
      status: false
    });
  }
};
</script>

<style>
</style>
