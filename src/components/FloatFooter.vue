<template>
  <div 
    :class="{'active-flut': activeFlut}" 
    class="float-icon">
    <div class="relative text-center text-white">
      <i 
        class="fas fa-thumbs-up" 
        title="Redes Sociais" 
        @click="show(true)" />
      <b-row 
        v-if="activeFlut" 
        class="m-0 text-center social">
        <b-col 
          cols="12" 
          class="pb-3">
          <div class="text-right mb-2">
            <a 
              v-if="activeFlut" 
              href="#" 
              class="text-white mr-1" 
              title="Fechar" 
              @click.prevent="show(false)"><i class="fas fa-times" /></a>
          </div>
          <p class="text-white m-0">Copyright <b>Vuefy | Music</b> &copy; <b>{{ year }}</b></p>
        </b-col>
        <b-col 
          cols="12" 
          class="text-center">
          <b-row class="m-0">
            <b-col 
              cols="12" 
              class="py-3 mt-md-0">
              <p class="text-white m-0">Developed&nbsp;&nbsp;<i 
                class="fas fa-heart" 
                style="font-size: 1.3rem;" />&nbsp;&nbsp;Michelon Souza</p>
            </b-col>
            <b-col 
              cols="12" 
              class="py-3">
              <a 
                class="text-white" 
                href="https://facebook.com/michelon.souza" 
                target="_blank" 
                rel="noindex, nofollow" 
                title="Facebook"><i class="fab fa-facebook-f" /></a>
              <a 
                class="text-white ml-4" 
                href="https://www.linkedin.com/in/michelonsouza/" 
                target="_blank" 
                rel="noindex, nofollow" 
                title="Linkedin"><i class="fab fa-linkedin-in" /></a>
              <a 
                class="text-white ml-4" 
                href="https://www.instagram.com/michelon/" 
                target="_blank" 
                rel="noindex, nofollow" 
                title="Instagram"><i class="fab fa-instagram" /></a>
              <a 
                class="text-white ml-4" 
                href="https://github.com/michelonsouza" 
                target="_blank" 
                rel="noindex, nofollow" 
                title="GitHub"><i class="fab fa-github" /></a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeFlut: false,
      year: new Date().getFullYear()
    };
  },
  methods: {
    show(value) {
      this.activeFlut = value;
    }
  }
};
</script>

<style lang="scss">
.relative {
  position: relative;
  vertical-align: middle;
  padding: 1rem;
  i {
    font-size: 2.5rem;
    padding-top: 0.1rem;
  }
}
.float-icon {
  content: "";
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--primary);
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1000;
  cursor: pointer;
  opacity: 0.9;

  .social {
    display: none;
    a {
      transition: 200ms ease;
    }
  }

  transition: all 400ms ease;
  &.active-flut {
    cursor: default;
    width: 400px;
    max-width: calc(100% - 20px);
    height: 300px;
    border-radius: 0.2rem;
    opacity: 1;
    i.fa-thumbs-up {
      display: none;
    }

    .social {
      display: block;

      a.text-white:hover {
        color: #000 !important;
      }

      a.close {
        z-index: 100000;
      }
    }
  }
}
</style>
