<template>
  <section class="imagenCard">
    <section class="imagenCard__container">
      <img :src="getFile(`${image}.png`)" alt="" />
      <section class="imagenCard__container__info">
        <section class="imagenCard__header">
          <h5>Distant Galaxy</h5>
          <article class="imagenCard__avatar">
            <img :src="getFile(`${avatar}.png`)" alt="avatar" />
            <p>{{ avatarName }}</p>
          </article>
        </section>

        <section class="ic">
          <article>
            <p class="ic__title">Price</p>
            <p class="ic__value">1.63 ETH</p>
          </article>
          <article class="ic__right">
            <p class="ic__title ic__title--right">Highest Bid</p>
            <p class="ic__value">0.33 wETH</p>
          </article>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import getFile from "../../utils/getFile";

defineProps({
  image: String,
  avatar: String,
  avatarName: String,
});
</script>

<style lang="scss" scoped>
.imagenCard {
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
      display: grid;
      gap: 1.5rem;
    }
  }
  &__header {
    img {
      width: 24px;
      height: 24px;
    }
  }
  &__avatar {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
}

.ic {
  display: flex;
  justify-content: space-between;
  &__right {
    text-align: right;
  }
  &__title {
    font-family: Space Mono;
    font-size: 12px;
    font-weight: 400;
    line-height: 13px;
    margin-bottom: 8px;
    color: #858584;
  }
  &__value {
    font-family: Space Mono;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: right;
    color: #fff;
  }
}
</style>
