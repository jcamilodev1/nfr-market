<template>
  <section class="TopCreators">
    <section class="TopCreators__title">
      <div>
        <h2>Top creators</h2>
        <p>Checkout Top Rated Creators on the NFT Marketplace</p>
      </div>
      <IconButton class="outline" icon="rocket">View Rankings</IconButton>
    </section>
    <section class="TopCreators__artist">
      <ArtistCard v-for="creator in creatorsList" :creator="creator" @click="$router.push({ name: 'creatorProfile' })" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { onMounted,computed } from "vue";

import IconButton from "./utils/IconButton.vue";
import ArtistCard from "./cards/ArtistCard.vue";
import { useCreatorsStore } from "@/store/TopCreators";


const creatorStore = useCreatorsStore()

onMounted(() => {
  creatorStore.getCreatorsList()
})
const creatorsList = computed(() => {
  return creatorStore.creatorsList
})

</script>

<style lang="scss" scoped>
.TopCreators {
  color: white;
  margin-top: 50px;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
  p {
    font-size: 1.5rem;
    font-weight: 300;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    // flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 20px;
  }
  &__artist {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
}
</style>
