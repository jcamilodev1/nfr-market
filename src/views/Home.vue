<template>
  <main class="main">
    <section class="main__container">
      <Hero />
      <Trending />
      <TopCreators />
      <BrowseCategories />
      <DiscoverNfts />
    </section>

    <NftView />

    <section class="main__container">
      <HowWorks />
      <WeeklyDigest />
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Hero from "@/components/Hero.vue";
import Trending from "@/components/Trending.vue";
import TopCreators from "@/components/TopCreators.vue";
import WeeklyDigest from "@/components/WeeklyDigest.vue";
import HowWorks from "@/components/HowWorks.vue";
import NftView from "@/components/NftView.vue";
import BrowseCategories from "@/components/BrowseCategories.vue";
import DiscoverNfts from "@/components/DiscoverNfts.vue";

// import { useCategoriesStore } from "@/store/Categories";
// import { useCreatorsStore } from "@/store/TopCreators";
// import { useTrendingStore } from "@/store/Trending";


// const categoriesStore = useCategoriesStore()
// const creatorStore = useCreatorsStore()
// const trendingStore = useTrendingStore()

// onMounted(() => {
//   categoriesStore.getCategoriesList()
//   creatorStore.getCreatorsList()
//   trendingStore.getTrendingList()
// }),


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
