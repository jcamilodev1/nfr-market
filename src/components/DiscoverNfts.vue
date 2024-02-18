<script setup lang="ts">
import IconButton from "./utils/IconButton.vue";
import NftCard from "./cards/NftCard.vue";
</script>

<template>
  <section class="discover">
    <section class="discover__header">
      <article class="disccover__info">
        <h3>Discover more NFTs</h3>
        <p>Explore new trending NFTs</p>
      </article>
      <IconButton class="outline" icon="eye">See All</IconButton>
    </section>
    <section class="discover__grid">
      <NftCard
        title="Distant Galaxy"
        image="galaxy"
        avatar="MoonDancer"
        avatar-name="MoonDancer"
      />
      <NftCard
        title="Life On Edena"
        image="edena"
        avatar="nebula"
        avatar-name="NebulaKid"
      />
      <NftCard
        title="AstroFiction"
        image="astro"
        avatar="spaceOne"
        avatar-name="Spaceone"
      />
    </section>
  </section>
</template>

<style lang="scss">
.discover {
  display: grid;
  gap: 4rem;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}
</style>
