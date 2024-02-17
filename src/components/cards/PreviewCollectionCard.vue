<template>
  <section class="previewCollectionCard">
    <article class="previewCollectionCard__img">
      <img src="@\assets\images\Image-Placeholder.jpg" alt="" />
    </article>
    <article class="previewCollectionCard__info">
      <img src="@\assets\images\Image-Placeholder.jpg" alt="" />
      <img src="@\assets\images\Image-Placeholder.jpg" alt="" />
      <div class="previewCollectionCard__info-text">
        1025+
      </div>
    </article>
    <InfoCollection title="Space Walking" src="Avatar.png" name="Animakid" />
  </section>
</template>

<script setup lang="ts">
import InfoCollection from '@/components/utils/InfoCollection.vue';

</script>

<style lang="scss" scoped>
.previewCollectionCard {
  display: grid;
  gap: 15px;
  max-width: 350px;
  img {
    width: 100%;
    border-radius: var(--radius);
    transition: all 0.5s;
      cursor: pointer;
      &:hover{
        transform: scale(0.8);
        transition: all 0.5s;
      }
  }

  &__info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    img {
      width: 100%;
      height: 100px;
    }
    &-text{
      width: 100%;
      background-color: var(--call-action-color);
      border-radius: var(--radius);
      font-weight: 600;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s;
      cursor: pointer;
      &:hover{
        transform: scale(0.8);
        transition: all 0.5s;
      }
    }
  }
}
</style>
