<template>
  <article class="artistCard">
    <img :src="creator.avatar" alt="" />
    <h2>{{creator.name}}</h2>
    <p><span>Total Sales: </span> {{ creator.total }}</p>
    <div>{{ creator.id }}</div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";

  const props =  defineProps({
    creator: {
      type: Object
    }
  })
  const creator:any = computed(() => {
    return  props.creator;
  })
</script>

<style lang="scss" scoped>
.artistCard {
  display: grid;
  background-color: #3b3b3b;
  border-radius: var(--radius);
  padding: 20px;
  justify-items: center;
  min-width: 250px;
  position: relative;
  img{
    border-radius: 100%;
  }
  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }
  h2 {
    font-size: 25px;
    margin: 0;
  }
  p {
    font-weight: 300;
    font-size: 15px;
    span {
      color: #858584;
    }
  }
  div {
    position: absolute;
    top: 15px;
    left: 15px;

    background: #2b2b2b;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
