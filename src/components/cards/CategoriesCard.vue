<template>
  <section class="categoriesCard">
    <div>
      <i :class="`ti ti-${category.icon}`"></i>
      <img :src="category.img" alt="All" />
    </div>
    <article>
      <h3>{{ category.name }}</h3>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  category: {
    type: Object
  }
})
const category:any = computed(() => {
  return props.category
})
</script>

<style lang="scss" scoped>

.categoriesCard{
  background: #3B3B3B;
  border-radius: var(--radius);
  width: 100%;
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
