<template>
  <div class="lds-vuefy">
    <div />
    <div />
    <div />
  </div>
</template>

<script>
export default {
  name: "LoadingIcon"
};
</script>

<style scoped>
.lds-vuefy {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-vuefy div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #fff;
  animation: lds-vuefy 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-vuefy div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
.lds-vuefy div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}
.lds-vuefy div:nth-child(3) {
  left: 45px;
  animation-delay: 0;
}
@keyframes lds-vuefy {
  0% {
    top: 6px;
    height: 51px;
  }
  50%,
  100% {
    top: 19px;
    height: 26px;
  }
}
</style>
