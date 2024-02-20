<template>

  <section class="login">
    <article class="login__img">
      <img src="@/assets/images/LoginBg.jpg" alt="" />
    </article>

    <article class="login__form">
      <article>
        <h3>Connect Wallet</h3>
        <p>
          Choose a wallet you want to connect. There are several wallet
          providers.
        </p>

        <article class="login__form__container">
          <WalletBtn src="Metamask.png">Metamask</WalletBtn>
          <WalletBtn src="WalletConnect.png">Wallet Connect</WalletBtn>
          <WalletBtn src="Coinbase.png">Coinbase</WalletBtn>
        </article>
      </article>
    </article>
  </section>

</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import FooterView from '@/components/FooterView.vue'
import WalletBtn from '@/components/utils/WalletBtn.vue';
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
    }
  }
}
</style>
