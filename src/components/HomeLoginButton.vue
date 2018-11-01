<template>
  <b-btn 
    variant="primary" 
    class="button-login" 
    @click="login"><i class="fab fa-spotify" />&nbsp;&nbsp;Entrar no Spotify</b-btn>
</template>

<script>
export default {
  name: "AppHomeLoginButton",
  methods: {
    login() {
      this.$router.push("/auth");
    }
  }
};
</script>

<style lang="scss" scoped>
.button-login {
  background-color: transparent;
  padding: 1.5rem 3rem;
  border-radius: 0.2rem;
  cursor: pointer;
  color: #fff;
  font-size: 1.6rem;
  transition: all 200ms ease;
  border: 1px solid #fff;
  &:hover,
  &:active,
  &:focus {
    border-color: var(--primary);
    background-color: var(--primary);
  }
}
</style>
