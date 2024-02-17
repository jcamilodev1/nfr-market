<template>
  <section class="browseCategories">
    <h2>Browse Categories</h2>
    <section class="browseCategories__list">

      <CategoriesCard />

    </section>
  </section>
</template>

<script setup lang="ts">
import CategoriesCard from './cards/CategoriesCard.vue';
</script>

<style lang="scss" scoped>
.browseCategories{
  color: white;
  h2 {
      font-size: 2.5rem;
      margin-bottom: 15px;
    } 
  &__list{
    display: flex;
    gap: 20;
    
  }
}


</style>