<template>
  <label class="baseInput" :for="name">
    <i class="ti ti-user" :id="name"></i>
    <input type="text"  v-bind="$attrs" @input="$emit('update:modelValue', setEvent($event))">
  </label>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String, Number, Date],
    default: null,
    },
  name: {
    type: String
  }
})
const setEvent = (event: any) => event.target.value ?? '';
</script>

<style lang="scss" scoped>

.baseInput{
  background: white;
  padding: 15px;
  border-radius: var(--radius);
  max-width: 350px;
  display: flex;
  align-items: center;
  gap: 20px;
  input{
    width: 100%;
    border: none;
    outline: none;
  }
}
</style>