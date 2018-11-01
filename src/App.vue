<template>
  <div id="app">
    <app-header v-if="$route.path !== '/auth'" />
    <transition 
      name="fade" 
      mode="out-in">
      <router-view class="pt-5 mt-5" />
    </transition>
    <app-float-footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import FloatFooter from "@/components/FloatFooter.vue";

export default {
  components: {
    appHeader: Header,
    appFloatFooter: FloatFooter
  }
};
</script>


<style lang="scss">
* {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: url(./assets/intro_bg_1280x720.jpg) center center no-repeat fixed;
  background-size: cover;
  background-color: #000 !important;

  &:before {
    content: "";
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .fade-enter-active {
    transition: opacity 250ms ease;
    animation: fade-in 250ms ease-in forwards;
  }

  .fade-leave-active {
    transition: opacity 250ms ease;
    animation: fade-out 250ms ease-in forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: var(--pink);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(191, 53, 134, 0.4);
  }
}
</style>
