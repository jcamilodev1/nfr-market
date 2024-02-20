<script lang="ts" setup>
import getFile from "../utils/getFile";
import EmailButton from "./utils/EmailButton.vue";
</script>

<template>
  <section class="weekly">
    <img :src="getFile('/src/assets/images/Photo.png')" alt="Avatar" />
    <div class="weekly__box">
      <div class="weekly__info">
        <h3>Join our weekly digest</h3>
        <p>Get exclusive promotions & updates straight to your inbox.</p>
      </div>
      <EmailButton />
    </div>
  </section>
</template>

<style lang="scss">
.weekly {
  background-color: var(--bg-color);
  padding: 4rem;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 1rem;
  display: grid;
  align-items: center;
  gap: 4rem;
  &__box {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
  }
  &__info {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
}
</style>
