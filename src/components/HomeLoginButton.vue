<template>
  <button 
    class="button-login" 
    @click="login"><i class="fab fa-spotify"/>&nbsp;&nbsp;Entrar no Spotify</button>
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
  &:hover,
  &:active,
  &:focus {
    border-color: var(--pink);
    background-color: var(--pink);
  }
}
</style>
