<script lang="ts" setup>
import getFile from "../../utils/getFile";

defineProps({ title: String, text: String, image: String });
</script>

<template>
  <section class="work">
    <img :src="getFile(`${image}.png`)" alt="" />
    <article class="work__card">
      <h5>{{ title }}</h5>
      <p>{{ text }}</p>
    </article>
  </section>
</template>

<style lang="scss">
.work {
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  align-items: center;
  text-align: center;
}
</style>
