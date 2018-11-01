<template>
  <app-loading />
</template>

<script>
import * as types from "@/store/types";
import { mapActions } from "vuex";

import Loading from "@/components/Loading.vue";

export default {
  name: "Auth",
  components: {
    appLoading: Loading
  },
  created() {
    this[types.ACTION_SET_USER_AUTH]();
    this[types.ACTION_SET_AUTH](true);
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
      types.ACTION_SET_LOGIN
    ])
  }
};
</script>

<style lang="scss" scoped>
</style>
