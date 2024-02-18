<script setup lang="ts">
const onSubmit = () => {
  console.log("Envio");
};
</script>

<template>
  <div>
    <form class="mail" @submit.prevent="onSubmit">
      <input
        class="mail__input"
        type="text"
        placeholder="Enter your email here"
        email
      />
      <button class="mail__btn">
        <i class="ti ti-mail"></i>
        Subscribe
      </button>
    </form>
  </div>
</template>

<style lang="scss">
.mail {
  background-color: #fff;
  display: flex;
  border-radius: 1rem;
  overflow: hidden;
  input{
    outline: none;
  }
  &__input {
    padding: 1rem;
    border: none;
  }
  &__btn {
    background-color: var(--call-action-color);
    padding: 1rem;
    color: #fff;
    border: none;
    outline: none;
    width: 100%;
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
}
</style>
