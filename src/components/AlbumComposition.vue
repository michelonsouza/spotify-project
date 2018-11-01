<template>
  <div>
    <p 
      :class="{ size, [color]: color, 'mb-xl-4': desc }" 
      class="mb-2"><i class="fas fa-feather-alt text-primary" /><b>&nbsp;Participantes: </b> {{ participants }}
    </p>
    <p 
      :class="{ size, [color]: color, 'mb-xl-4': desc }" 
      class="mb-2"><i class="fas fa-check text-primary" /><b> Disponibilidade:</b> {{ availability }}</p>
    <p 
      :class="{ size, [color]: color, 'mb-xl-4': desc }" 
      class="mb-2"><i class="fas fa-calendar-alt text-primary" /><b> Lançamento:</b> {{ releaseDate }}</p>
  </div>
</template>

<script>
import mixin from "@/mixins/albums.mixin";
import mixinConposition from "@/mixins/composition.mixin";

export default {
  name: "AlbumComposition",
  mixins: [mixin, mixinConposition],
  props: {
    album: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
