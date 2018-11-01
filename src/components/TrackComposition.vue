<template>
  <div>
    <p 
      :class="{ size, [color]: color, 'mb-xl-4': desc }" 
      class="mb-2"><i class="fas fa-feather-alt text-primary" /> <b>Participantes:</b> {{ participants }}
    </p>
    <p 
      :class="{ size, [color]: color, 'mb-xl-4': desc }" 
      class="mb-2"><i class="fas fa-hashtag text-primary" /><b> Número da Faixa:</b> {{ object.track_number }}</p>
    <p 
      :class="{ size, [color]: color, 'mb-xl-4': desc }" 
      class="mb-2"><i class="far fa-clock text-primary" /><b> Duração:</b> {{ timeCalc(object.duration_ms) }}</p>
  </div>
</template>

<script>
import mixin from "@/mixins/generic.mixin";
import mixinConposition from "@/mixins/composition.mixin";

export default {
  name: "TrackComposition",
  mixins: [mixin, mixinConposition],
  props: {
    object: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
