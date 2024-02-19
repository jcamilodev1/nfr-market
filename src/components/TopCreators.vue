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
      <ArtistCard @click="$router.push({ name: 'creatorProfile' })" />
    </section>
  </section>
</template>

<script setup lang="ts">
import IconButton from "./utils/IconButton.vue";
import ArtistCard from "./cards/ArtistCard.vue";
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
    align-items: center;
    margin-bottom: 20px;
  }
  &__artist {
    display: flex;
    gap: 20px;
  }
}
</style>
