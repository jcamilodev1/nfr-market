<template>
  <section class="header">
    <article class="header__logo">
      <router-link class="header__logo" to="/">
        <i class="ti ti-building-store"></i>
        <h1>NFT Marketplace</h1>
      </router-link>
    </article>

    <article class="header__nav">
      <div>Marketplace</div>
      <div>Rankings</div>
      <div>Connect a wallet</div>
      <IconButton icon="user">Sign Up</IconButton>
    </article>
  </section>
</template>

<script setup lang="ts">
import IconButton from "./utils/IconButton.vue";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-bottom: 50px;
  &__logo {
    display: flex;
    align-items: center;
    gap: 20px;
    color: white;
    text-decoration: none;
    i {
      font-size: 20px;
      color: var(--call-action-color);
    }
    h1 {
      font-weight: 800;
      font-size: 24px;
    }
  }
  &__nav {
    display: flex;
    align-items: center;
    gap: 25px;
    div {
      cursor: pointer;
    }
  }
}
</style>
