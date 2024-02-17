<script lang="ts" setup>
import getFile from "../utils/getFile";
</script>

<template>
  <section class="nft-content">
    <img :src="getFile('nft.png')" alt="" />
  </section>
</template>

<style lang="scss">
.nft-content {
  left: 0;
  img {
    width: 100%;
    min-width: 100dvw;
  }
}
</style>
