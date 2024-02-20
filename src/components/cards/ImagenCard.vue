<template>
  <section class="imagenCard">
    <section class="imagenCard__container">
      <img src="@/assets/images/Image-Placeholder.jpg" alt="" />
      <article class="imagenCard__container__info">
        <InfoCollection
          title="Space Walking"
          src="src/assets/images/Avatar.png"
          name="Animakid"
        />
      </article>
    </section>
  </section>
</template>

<script setup lang="ts">
import InfoCollection from "../utils/InfoCollection.vue";
</script>

<style lang="scss" scoped>
.imagenCard {
  padding: 40px;
  &__container {
    max-width: 500px;
    background: #3b3b3b;
    border-radius: var(--radius);
    color: white;
    img {
      width: 100%;
      border-radius: 20px 20px 0 0;
      object-fit: cover;
    }
    &__info {
      padding: 20px;
    }
  }
}
</style>
