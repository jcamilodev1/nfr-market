<template>
  <section class="trending">
    <h2>Trending Collection</h2>
    <p>Checkout our weekly updated trending collection.</p>
    <section class="trending__card">

      <PreviewCollectionCard />
      
    </section>
  </section>
</template>

<script setup lang="ts">
import PreviewCollectionCard from './cards/PreviewCollectionCard.vue';
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
  }
}

</style>