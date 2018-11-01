<template>
  <b-col 
    :md="md" 
    :lg="lg" 
    :xl="xl" 
    cols="12" 
    sm="6" 
    class="p-2">
    <div class="card mb-1">
      <img 
        :src="imgUrl" 
        :alt="name" 
        v-bind="cardTitle" 
        :class="{pointer: (type !== 'tracks')}" 
        class="card-img-top" 
        @click="objectEmit">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <small>
          <slot />
        </small>
        <p>
          <small>
            <app-favorite-button 
              :type="type" 
              :object="object" />
          </small>
        </p>
      </div>
    </div>
  </b-col>
</template>

<script>
import FavoriteButton from "@/components/FavoriteButton.vue";
import mixin from "@/mixins/generic.mixin";

export default {
  name: "Card",
  components: {
    appFavoriteButton: FavoriteButton
  },
  mixins: [mixin],
  props: {
    object: {
      type: Object,
      required: true
    },
    md: {
      type: Number,
      required: true
    },
    lg: {
      type: Number,
      required: true
    },
    xl: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  computed: {},
  methods: {
    objectEmit() {
      if (this.type !== "tracks") {
        const emit = `${this.type}Emit`;
        this.$emit(emit, this.object);
      }
    }
  }
};
</script>

<style lang="scss">
.card {
  border: 1.5px solid var(--primary) !important;
  .card-img-top {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    &.pointer {
      cursor: pointer;
    }
  }

  .card-body {
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>
