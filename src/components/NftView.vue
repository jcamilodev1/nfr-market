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
  margin: 8rem 0;
  img {
    width: 100%;
  }
}
</style>
