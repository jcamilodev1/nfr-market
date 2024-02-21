<template>
  <section class="AvatarProfile">
    <img :src="getFile(`/src/assets/images/${src}`)" alt="Avatar" />
    <span>{{ name }}</span>
  </section>
</template>

<script setup lang="ts">
import getFile from "@/utils/getFile";

defineProps({
  src: {
    type: String,
  },
  name: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.AvatarProfile {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  img {
    width: 15px;
    border-radius: 100%;
  }
  span {
    font-size: 12px;
  }
}
</style>
