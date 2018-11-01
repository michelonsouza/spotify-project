<template>
  <b-col 
    cols="12" 
    md="8" 
    offset-md="2" 
    lg="6" 
    offset-lg="3">
    <b-nav-form 
      class="py-4" 
      autocomplete="off">
      <b-form-input 
        v-model="value" 
        size="lg" 
        class="search" 
        type="text" 
        placeholder="Buscar..." />
      <b-button 
        id="search-button" 
        size="lg" 
        class="btn-search" 
        type="submit" 
        @click.prevent="search">
        <i class="fas fa-search" />
      </b-button>
    </b-nav-form>
  </b-col>
</template>

<script>
import * as types from "@/store/types";
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
      this.$emit("search");
      this.$store.dispatch(types[`ACTION_SET_${this.type.toUpperCase()}`], {
        [this.type]: false,
        status: false
      });
      this.$store.dispatch(
        types[`ACTION_SET_${this.type.toUpperCase()}_LIST`],
        { [`${this.type}List`]: false, status: false }
      );

      const result = {
        text: this.value,
        status: true
      };
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
          if (data[`${this.type}s`].items.length > 0) {
            const type = `ACTION_SET_${this.type.toUpperCase()}_LIST`;
            const setMethod = types[type];
            this.$store
              .dispatch(setMethod, {
                [`${this.type}List`]: data[`${this.type}s`].items,
                status: true
              })
              .then(() => {
                this.value = "";
                this.$emit("searched", result);
              });
          } else {
            result.status = false;
            this.$emit("searched", result);
          }
        })
        .catch(error => {
          console.log(error);
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
