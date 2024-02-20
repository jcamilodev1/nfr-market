<template>
  <section class="trending">
    <h2>Trending Collection</h2>
    <p>Checkout our weekly updated trending collection.</p>
    <section class="trending__card">

      <PreviewCollectionCard v-for="collection in trendingList" :key="collection.collectioniD" :collection="collection"   />
      
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import PreviewCollectionCard from './cards/PreviewCollectionCard.vue';
import { useTrendingStore } from "@/store/Trending";
const trendingStore = useTrendingStore()

onMounted(() => {
  trendingStore.getTrendingList()
})

const trendingList:any = computed(() => {
  return trendingStore.trendingList
})
</script>

<style lang="scss" scoped>

.trending {
  color: white;
  margin-top: 50px;
  h2{
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
  p{
    font-size: 1.5rem;
    font-weight: 300;
  }
  &__card{
    display: flex;
    margin-top: 20px;
    gap: 30px;
  }
}

</style>