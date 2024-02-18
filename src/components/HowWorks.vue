<script lang="ts" setup>
import HowWorksCard from "./cards/HowWorksCard.vue";
</script>

<template>
  <section class="works">
    <article>
      <h3>How it works</h3>
      <p>Find out how to get started</p>
    </article>
    <section class="works__grid">
      <HowWorksCard
        image="wallet"
        title="Setup Your wallet"
        text="Set up your wallet of choice. Connect it to the Animarket by clicking
        the wallet icon in the top right corner."
      />
      <HowWorksCard
        image="images"
        title="Create Collection"
        text="Upload your work and setup your collection. Add a description,
            social links and floor price."
      />
      <HowWorksCard
        image="cart"
        title="Start Earning"
        text="Choose between auctions and fixed-price listings. Start earning by
            selling your NFTs or trading others."
      />
    </section>
  </section>
</template>

<style lang="scss">
.works {
  display: grid;
  gap: 4rem;
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}
</style>
