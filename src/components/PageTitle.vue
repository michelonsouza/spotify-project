<template>
  <b-col 
    cols="12" 
    md="6" 
    offset-md="3" 
    class="py-3">
    <h2 
      :class="color" 
      class="text-center display-name text-uppercase">{{ title }}</h2>
  </b-col>
</template>

<script>
export default {
  name: "AppPageTitle",
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "text-white"
    }
  }
};
</script>

<style lang="scss" scoped>
.display-name {
  &::before {
    content: "";
    border: 3px solid var(--pink);
    position: absolute;
    bottom: 0.5rem;
    left: 30%;
    width: 40%;
    text-align: center;
  }
}
</style>
