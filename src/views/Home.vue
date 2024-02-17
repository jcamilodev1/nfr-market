<template>
  <main class="main">
    <section class="main__container">
      <Header />
      <Hero />
      <Trending />
      <TopCreators />
      <BrowseCategories />
    </section>

    <NftView />

    <section class="main__container">
      <HowWorks />
      <WeeklyDigest />
    </section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Trending from "../components/Trending.vue";
import TopCreators from "../components/TopCreators.vue";
import Footer from "../components/FooterView.vue";
import WeeklyDigest from "../components/WeeklyDigest.vue";
import HowWorks from "../components/HowWorks.vue";
import NftView from "../components/NftView.vue";
import BrowseCategories from "../components/BrowseCategories.vue";
</script>

<style lang="scss" scoped>
.main {
  margin-bottom: 8rem;
  &__container {
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
    display: grid;
    gap: 8rem;
  }
}
</style>
