<template>
  <div class="loading text-center">
    <b-img 
      :src="require('../assets/vuefy_logo_loading.png')" 
      class="loading-logo" />
    <div class="lds-vuefy">
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLoading"
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
  z-index: 100000;
  background-color: var(--pink);
  position: absolute;
  padding-top: calc(50vh - 150px) !important;
  top: 0 !important;
  margin: 0 !important;

  .loading-logo {
    width: 400px;
    max-width: 90%;
    display: block;
    margin: 0 auto;
  }
}

.lds-vuefy {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
}
.lds-vuefy div {
  display: inline-block;
  position: absolute;
  left: 0px;
  width: 60px;
  background: #fff;
  border-radius: 0.2rem;
  animation: lds-vuefy 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-vuefy div:nth-child(1) {
  left: 0px;
  animation-delay: -0.24s;
}
.lds-vuefy div:nth-child(2) {
  left: 70px;
  animation-delay: -0.12s;
}
.lds-vuefy div:nth-child(3) {
  left: calc(100% - 60px);
  animation-delay: 0;
}
@keyframes lds-vuefy {
  0% {
    top: 5px;
    height: 190px;
  }
  50%,
  100% {
    top: 50px;
    height: 100px;
  }
}
</style>
