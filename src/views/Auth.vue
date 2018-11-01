<template>
  <app-loading />
</template>

<script>
import * as types from "@/store/types";
import { mapActions } from "vuex";

import AuthLoading from "@/components/AuthLoading.vue";

export default {
  name: "Auth",
  components: {
    appLoading: AuthLoading
  },
  created() {
    this[types.ACTION_SET_USER_AUTH]();
    this[types.ACTION_SET_AUTH](true);
    this[types.ACTION_SET_USER_TOP_ARTISTS](true);
    if (!localStorage.getItem("token")) {
      this[types.ACTION_SET_LOGIN]();
    } else {
      this[types.ACTION_SET_USER]().then(() => {
        setTimeout(() => {
          this.$router.push("/");
        }, 2000);
      });
    }
  },
  methods: {
    ...mapActions([
      types.ACTION_SET_USER_AUTH,
      types.ACTION_SET_USER,
      types.ACTION_SET_AUTH,
      types.ACTION_SET_LOGIN,
      types.ACTION_SET_USER_TOP_ARTISTS
    ])
  }
};
</script>

<style>
</style>
