<template>
  <main>
    <Header />
    <Hero />
  </main>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
</script>

<style lang="scss" scoped>

main{
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>