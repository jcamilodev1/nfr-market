<script lang="ts" setup>
import getFile from "@/utils/getFile";
import InfoProfile from "@/components/InfoProfile.vue";
</script>

<template>
  <section class="profile">
    <img :src="getFile('bg-profile.png')" alt="" />
    <InfoProfile />
  </section>
</template>

<style lang="scss" scoped>
.profile {
  img {
    width: 100%;
    height: 320px;
    object-fit: cover;
  }
}
</style>
