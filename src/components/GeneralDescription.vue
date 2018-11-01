<template>
  <div v-if="object">
    <app-description 
      :object="object" 
      :type="`${type}s`">
      <component 
        :is="composition" 
        v-bind="{[type]: object}" 
        :color="`text-white`" 
        :desc="true" />
    </app-description>
    <app-description-white class="pb-5">
      <app-page-title 
        :title="descTitle" 
        color="text-dark" />
      <b-col 
        cols="12" 
        md="3" />
      <!-- eslint-disable -->
      <component v-for="item in objectType" v-if="descType !== 'trackList'" :is="card" v-bind="{[descType]: item}" :key="item.id" />
      <!-- eslint-disable -->
      <app-track-list-card v-else :track-list="objectType" />
    </app-description-white>
  </div>
</template>

<script>
import * as types from "@/store/types";
import Description from "@/components/Description.vue";
import DescriptionWhite from "@/components/DescriptionWhite.vue";
import PageTitle from "@/components/PageTitle.vue";
import TrackListCard from "@/components/TrackListCard.vue";

export default {
  name: "GeneralDescrition",
  components: {
    appDescription: Description,
    appDescriptionWhite: DescriptionWhite,
    appPageTitle: PageTitle,
    appTrackListCard: TrackListCard
  },
  props: {
    type: {
      type: String,
      required: true,
      default: () => ""
    },
    object: {
      type: Object,
      required: true,
      default: () => {}
    },
    descTitle: {
      type: String,
      required: true,
      default: () => ""
    }
  },
  computed: {
    card() {
      return () =>
        import(`@/components/${this.captalize(this.descType)}Card.vue`);
    },
    composition() {
      return () =>
        import(`@/components/${this.captalize(this.type)}Composition.vue`);
    },
    descType() {
      switch (this.type) {
        case "artist":
          return "album";
        case "album":
          return "trackList";
        case "track":
          return false;
      }
    },
    objectType() {
      switch (this.type) {
        case "artist":
          return this.object[`${this.descType}s`];
        case "album":
          return this.object.tracks.items;
      }
    }
  },
  mounted() {
    this.setTrackAlbum();
  },
  destroyed() {
    this.$store.dispatch(types[`ACTION_SET_${this.type.toUpperCase()}`], {
      [this.type]: false,
      status: false
    });
  },
  methods: {
    captalize(string) {
      return string.replace(/\b\w/g, l => l.toUpperCase());
    },
    setTrackAlbum() {
      if (this.type == "album") {
        const object = this.object;
        object.tracks.items.forEach(e => {
          e.album = {};
          e.album.images = [];
          e.album.images[1] = {
            url: this.object.images[1]
              ? this.object.images[1].url
              : require("../assets/no-image.jpg")
          };
          e.images = [];
          e.images[0] = {};
          e.images[1] = {
            url: this.object.images[1]
              ? this.object.images[1].url
              : require("../assets/no-image.jpg")
          };
        });
        this.$store.dispatch(types.ACTION_SET_ALBUM, {
          album: object,
          status: false
        });
      }
    }
  }
};
</script>
