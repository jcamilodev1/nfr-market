<template>
  <section class="browseCategories">
    <h2>Browse Categories</h2>
    <section class="browseCategories__list">

      <CategoriesCard v-for="category in categoriesList" :category="category"  />

    </section>
  </section>
</template>

<script setup lang="ts">
import { onMounted,computed } from "vue";

import CategoriesCard from './cards/CategoriesCard.vue';

import { useCategoriesStore } from "@/store/Categories";


const categoriesStore:any = useCategoriesStore()

onMounted(() => {
  categoriesStore.getCategoriesList()
})
const categoriesList:any = computed(() => {
  return categoriesStore.categoriesList
})

</script>

<style lang="scss" scoped>
.browseCategories{
  color: white;
  h2 {
      font-size: 2.5rem;
      margin-bottom: 15px;
    } 
  &__list{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    
  }
}


</style>