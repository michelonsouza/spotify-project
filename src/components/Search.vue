<template>
  <b-col cols="12" md="8" offset-md="2" lg="6" offset-lg="3">
    <b-nav-form class="py-4" autocomplete="off">
      <b-form-input v-model="value" size="lg" class="search" type="text" placeholder="Buscar..." />
      <b-button id="search-button" size="lg" class="btn-search" type="submit" @click.prevent="search">
        <i class="fas fa-search" />
      </b-button>
    </b-nav-form>
  </b-col>
</template>

<script>
import axios from "axios";

export default {
  name: "AppSearch",
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    search() {
      const options = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };

      const url = `https://api.spotify.com/v1/search?q=${this.value}&type=${
        this.type
      }`;

      axios
        .get(url, options)
        .then(res => res.data)
        .then(data => {
          const returnVal = {
            data: data,
            value: this.value
          };
          this.$emit("returnData", returnVal);
          this.value = "";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  padding: 30px 22px;
  width: 100%;
  border-color: var(--pink);
  transition: all 200ms ease !important;
}

#search-button {
  background-color: transparent;
  border: none;
  border-color: transparent;
  margin-left: -4.4rem;
  &:hover,
  &:active,
  &:focus {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
    & > i.fas {
      color: var(--dark);
    }
  }
  & > i.fas {
    color: var(--pink);
    font-size: 2rem;
    transition: color 200ms ease;
  }
}
</style>
