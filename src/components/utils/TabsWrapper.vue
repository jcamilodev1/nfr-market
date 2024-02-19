<script setup lang="ts">
import { ref, provide, useSlots } from "vue";

const tabTitles = ref();

tabTitles.value = useSlots()
  ?.default?.()
  .map((tab) => tab?.props?.title);

const selectedTitle = ref(tabTitles.value[0]);
provide("selectedTitle", selectedTitle);
</script>

<template>
  <div class="tabs">
    <ul>
      <li
        v-for="title in tabTitles"
        :key="title"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
