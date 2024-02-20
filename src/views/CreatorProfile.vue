<script lang="ts" setup>
import getFile from "@/utils/getFile";
import InfoProfile from "@/components/InfoProfile.vue";
import Tabs from "@/components/utils/Tabs.vue";
</script>

<template>
  <section class="profile">
    <img :src="getFile('bg-profile.png')" alt="" />
    <InfoProfile />
  </section>
  <Tabs>
    <Tab title="Tab 1">Tab 1 Content</Tab>
    <Tab title="Tab 2">Tab 2 Content</Tab>
    <Tab title="Tab 3">Tab 3 Content</Tab>
  </Tabs>
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
