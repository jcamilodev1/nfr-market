<script lang="ts" setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/FooterView.vue";
</script>

<template>
  <Header class="app__header" />
  <RouterView />
  <Footer />
</template>

<style lang="scss" scoped>
.app__header {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
