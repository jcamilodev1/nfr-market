<script lang="ts" setup>
import { ref, provide, Ref } from "vue";

const activeTabHash = ref("");
const tabs: Ref<any[]> = ref([]);

provide("addTab", (tab: any) => {
  const count = tabs.value.push(tab);

  if (count === 1) {
    activeTabHash.value = tab.hash;
  }
});
provide("activeTabHash", activeTabHash);
</script>

<template>
  <div>
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab.title"
        @click="activeTabHash = tab.hash"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
