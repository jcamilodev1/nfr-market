<template>
  <section class="collectionInfo">
    <h2>{{ title }}</h2>
    <AvatarProfile :src="src" :name="name" />
  </section>
</template>

<script setup lang="ts">
import AvatarProfile from './AvatarProfile.vue'
defineProps({
    title: {
      type: String
    },
    src: {
      type: String
    },
    name: {
      type: String
    }
  })
</script>

<style lang="scss" scoped>
.collectionInfo {
  h2 {
    font-weight: 600;
    font-size: 18px;
  }
}
</style>
