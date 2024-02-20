<script lang="ts" setup>
import { ref, inject, onBeforeMount, watch, Ref } from "vue";

const hash = ref("");
const isActive = ref(false);

const props = defineProps(["title"]);

const addTab: any = inject("addTab");
const activeTabHash: any = inject("activeTabHash");
onBeforeMount(() => {
  hash.value = `#${props.title.toLowerCase().replace(/ /g, "-")}`;

  addTab({
    title: props.title,
    hash: hash.value,
  });
});

watch(activeTabHash, () => {
  isActive.value = activeTabHash.value === hash.value;
});
</script>

<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>
