<template>
  <section class="hero">
    <article class="hero__container">
      <h2>Discover digital art & Collect NFTs</h2>
      <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
      <IconButton icon="rocket">Get Started</IconButton>
      <article class="hero__container-info">
        <div>
          <h3>240k+ </h3>
          <p>Total Sale</p>
        </div>
        <div>
          <h3>240k+ </h3>
          <p>Total Sale</p>
        </div>
        <div>
          <h3>240k+ </h3>
          <p>Total Sale</p>
        </div>
      </article>
    </article>
    <article>
    
     <ImagenCard />
    </article>
  </section>
</template>

<script setup lang="ts">
import IconButton from './utils/IconButton.vue';
import ImagenCard from './cards/ImagenCard.vue'
</script>

<style lang="scss" scoped>

.hero{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
  &__container{
    color: white;
    h2{
      font-size: 80px;
      margin-bottom: 20px;
    }
    p{
      font-size: 25px;
      margin-bottom: 20px;
      font-weight: 300;
    }
    &-info{
      display: flex;
      margin-top: 30px;
      gap: 50px;
      h3{
        font-size: 25px;
      }
      p{
        font-size: 18px;
      }
    }
  }
}
</style>