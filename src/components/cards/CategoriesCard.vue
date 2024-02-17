<template>
  <section class="categoriesCard">
    <div>
      <i class="ti ti-brush"></i>
      <img src="@/assets/images/Image-Placeholder.jpg" alt="All" />
    </div>
    <article>
      <h3>Art</h3>
    </article>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>

.categoriesCard{
  background: #3B3B3B;
  border-radius: var(--radius);
  max-width: 250px;
  overflow: hidden;
  div{
    position: relative;
    img{
      border-radius: var(--radius);
      width: 100%;
      filter: blur(10px);
    }
    i{
      position: absolute;
      font-size: 50px;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 5;
    }
  }
  article{
    padding: 20px;
  }
}
</style>
