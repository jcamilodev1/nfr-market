<template>
  <section class="previewCollectionCard">
    <article class="previewCollectionCard__img">
      <img :src="getMainImage" alt="" />
    </article>
    <article class="previewCollectionCard__info">
      <img v-for="img in getThumbsImage" :src="img.url" :alt="img.name" />
      <div class="previewCollectionCard__info-text">
        {{collection.totalImages}}+
      </div>
    </article>
    <InfoCollection :title="collection.collectionName" :src="collection.avatar" :name="collection.userName" />
  </section>
  <!-- {{ collection }} -->
</template>

<script setup lang="ts">
import { computed } from 'vue'

import InfoCollection from '@/components/utils/InfoCollection.vue';
const props = defineProps({
  collection: {
    type: Object
  }
})
const collection:any = computed(() => {
  return props.collection
})

const getMainImage = computed(() => {
  return collection.value.images.main[0].url
})
const getThumbsImage = computed(() => {
  return collection.value.images.thumbs
})
</script>

<style lang="scss" scoped>
.previewCollectionCard {
  display: grid;
  gap: 15px;
  max-width: 350px;
  img {
    width: 100%;
    border-radius: var(--radius);
    transition: all 0.5s;
      cursor: pointer;
      &:hover{
        transform: scale(0.9);
        transition: all 0.5s;
      }
  }

  &__info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    img {
      width: 100%;
      height: 100px;
    }
    &-text{
      width: 100%;
      background-color: var(--call-action-color);
      border-radius: var(--radius);
      font-weight: 600;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s;
      cursor: pointer;
      &:hover{
        transform: scale(0.9);
        transition: all 0.5s;
      }
    }
  }
}
</style>
