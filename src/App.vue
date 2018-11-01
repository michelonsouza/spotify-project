<template>
  <div id="app">
    <app-header />
    <app-flut-footer />
    <transition 
      name="slide" 
      mode="out-in">
      <router-view class="pt-5" />
    </transition>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import FlutFooter from "@/components/FlutFooter.vue";

export default {
  name: "App",
  components: {
    appHeader: Header,
    appFlutFooter: FlutFooter
  }
};
</script>

<style lang="scss">
* {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Let's get this party started */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

/* Handle */
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

  .slide-enter-active {
    transition: opacity 250ms ease;
    animation: slide-in 250ms ease-in forwards;
  }

  .slide-leave-active {
    transition: opacity 250ms ease;
    animation: slide-out 250ms ease-in forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
}
</style>
