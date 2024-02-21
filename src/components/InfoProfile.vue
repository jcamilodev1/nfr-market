<script lang="ts" setup>
import IconButton from "@/components/utils/IconButton.vue";
import getFile from "@/utils/getFile";
</script>

<template>
  <section class="info">
    <img src="@/assets/images/profile.png" alt="" />
    <section class="info__header">
      <h2>Animakid</h2>
      <article class="info__btns">
        <IconButton icon="copy">0xc0E3...B79C</IconButton>
        <IconButton class="outline" icon="plus">Follow</IconButton>
      </article>
    </section>
    <section class="info__text">
      <article class="info__values">
        <div>
          <h4>240k+</h4>
          <p>Volume</p>
        </div>
        <div>
          <h4>50+</h4>
          <p>NFTs Sold</p>
        </div>
        <div>
          <h4>3000+</h4>
          <p>Followers</p>
        </div>
      </article>

      <div>
        <h5 class="info__title">Bio</h5>
        <p>The internet's friendliest designer kid.</p>
      </div>
      <h5 class="info__title">Links</h5>
      <article class="info__btns">
        <i class="ti ti-world"></i>
        <i class="ti ti-brand-discord"></i>
        <i class="ti ti-brand-youtube"></i>
        <i class="ti ti-brand-twitter"></i>
        <i class="ti ti-brand-instagram"></i>
      </article>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.info {
  max-width: 1200px;
  margin: 0 auto 40px;
  img {
    width: 120px;
    height: 120px;
    margin-top: -40px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  &__btns {
    display: flex;
    gap: 1rem;
    align-items: center;
    i {
      font-size: 32px;
      color: var(--secondary-color);
      &:hover {
        cursor: pointer;
        color: var(--call-action-color);
      }
    }
  }
  &__text {
    display: grid;
    gap: 1rem;
  }
  &__values {
    display: flex;
    gap: 2rem;
  }
  &__title {
    color: var(--tertiary-color);
  }
}
</style>
