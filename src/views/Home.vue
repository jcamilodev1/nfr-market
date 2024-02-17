<template>
  <main>
    <Header />
    <Hero />
    <Trending />
    <TopCreators />
    <BrowseCategories />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Trending from "../components/Trending.vue";
import TopCreators from "../components/TopCreators.vue";
import Footer from "../components/FooterView.vue";
import BrowseCategories from "../components/BrowseCategories.vue";
</script>

<style lang="scss" scoped>
main {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
