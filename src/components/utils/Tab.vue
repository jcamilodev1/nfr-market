<script lang="ts" setup>
import { inject } from "vue";

defineProps({
  title: String,
});

const selectedTitle = inject("selectedTitle");
</script>

<template>
  <div class="tab-content" v-show="title == selectedTitle">
    <slot />
  </div>
</template>
