<template>
  <b-row class="bg-light-white m-0 pt-3">
    <slot />
  </b-row>
</template>

<script>
export default {
  name: "DescriptionWhite"
};
</script>


<style>
.bg-light-white {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
