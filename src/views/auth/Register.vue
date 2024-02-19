<template>
  <Header class="p-3" />

  <section class="login">
    <article class="login__img">
      <img src="@/assets/images/LoginBg.jpg" alt="" />
    </article>

    <article class="login__form">
      <article>
        <h3>Create account</h3>
        <p>
          Welcome! enter your details and start creating, collecting and selling NFTs.
        </p>

        <form class="login__form__container">
          <BaseInput placeholder="Username" for="username" />
          <BaseInput placeholder="Email Address" for="email" />
          <BaseInput placeholder="Password" for="pass" />
          <BaseInput placeholder="Confirm Password" for="confirmPass" />
          <IconButton>Create account</IconButton>
        </form>
      </article>
    </article>
  </section>

  <FooterView />
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import FooterView from '@/components/FooterView.vue'
import WalletBtn from '@/components/utils/WalletBtn.vue';
import BaseInput from '@/components/form/BaseInput.vue'
import IconButton from '@/components/utils/IconButton.vue';
</script>

<style lang="scss" scoped>
.login {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  &__img {
    img {
      width: 100%;
      object-fit: cover;
    }
    @media (max-width: 800px) {
      display: none;
    }
  }
  &__form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    h3 {
      font-size: 3rem;
      margin-bottom: 20px;
    }
    p {
      font-size: 2rem;
      margin-bottom: 40px;
      line-height: 2.3rem;
      font-weight: 300;
    }
    &__container{
      display: grid;
      gap: 25px;
      button{
        max-width: 350px;
        justify-content: center;
      }
    }
  }
}
</style>
