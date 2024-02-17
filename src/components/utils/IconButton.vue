<template>
  <button>
    <i :class="`ti ti-${icon}`"></i>
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
  }
})
</script>

<style lang="scss" scoped>
button{
  display: flex;
  align-items: center;
  background: var(--call-action-color);
  border-radius: var(--radius);
  border: 1px;
  padding: 15px 20px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  i{
    margin-right: 18px;
    font-size: 18px;
  }
  &:hover{
    background: var(--call-action-color);
    opacity: 0.8;
    transition: all 0.5s;
  }
  &.outline{
    border: 1px solid var(--call-action-color);
    background: transparent;
    i{
      color: var(--call-action-color);
    }
  }
}

</style>