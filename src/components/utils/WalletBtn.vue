<template>
  <button>
    <img :src="getFile(src)" alt="" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import getFile from '@/utils/getFile'
defineProps({
  src: {
    type: String,
  },
})
</script>

<style lang="scss" scoped>
    button {
      width: 300px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 20px;
      border: 1px solid #a259ff;
      border-radius: var(--radius);
      padding: 15px 40px;
      background: #3b3b3b;
      color: white;
      font-size: 1.3rem;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        transition: all 0.5s;
        background: #817a7a98;
      }
      img {
        width: 40px;
        height: 40px;
      }
    }

</style>
