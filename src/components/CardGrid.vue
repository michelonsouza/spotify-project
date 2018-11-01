<template>
  <b-col 
    :md="md" 
    :lg="lg" 
    :xl="xl" 
    cols="12" 
    sm="6" 
    class="p-2">
    <slot/>
  </b-col>
</template>

<script>
export default {
  name: "AppCardGrid",
  props: {
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
    }
  }
};
</script>

<style>
</style>
