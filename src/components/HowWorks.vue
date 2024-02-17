<script lang="ts" setup>
import getFile from "../utils/getFile";
</script>

<template>
  <section class="works">
    <div>
      <h3>How it works</h3>
      <p>Find out how to get started</p>
    </div>
    <div class="works__grid">
      <div class="works__card">
        <img :src="getFile('wallet.png')" alt="" />
        <div class="works__info">
          <h5>Setup Your wallet</h5>
          <p>
            Set up your wallet of choice. Connect it to the Animarket by
            clicking the wallet icon in the top right corner.
          </p>
        </div>
      </div>
      <div class="works__card">
        <img :src="getFile('images.png')" alt="" />
        <div class="works__info">
          <h5>Create Collection</h5>
          <p>
            Upload your work and setup your collection. Add a description,
            social links and floor price.
          </p>
        </div>
      </div>
      <div class="works__card">
        <img :src="getFile('cart.png')" alt="" />
        <div class="works__info">
          <h5>Start Earning</h5>
          <p>
            Choose between auctions and fixed-price listings. Start earning by
            selling your NFTs or trading others.
          </p>
        </div>
      </div>
    </div>
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
  &__card {
    background-color: var(--bg-color);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    align-items: center;
    text-align: center;
  }
}
</style>
