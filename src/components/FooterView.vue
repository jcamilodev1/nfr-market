<script setup lang="ts">
import EmailButton from "../components/utils/EmailButton.vue";
</script>

<template>
  <footer class="footer">
    <section class="footer__container">
      <section class="footer__content">
        <article class="footer__column">
          <article class="footer__title">
            <i class="ti ti-building-store"></i>
            <h5>NFT Marketplace</h5>
          </article>
          <p>NFT marketplace UI created with Anima for Figma.</p>
          <p>Join our community</p>
          <article class="footer__social">
            <i class="ti ti-brand-discord"></i>
            <i class="ti ti-brand-youtube"></i>
            <i class="ti ti-brand-twitter"></i>
            <i class="ti ti-brand-instagram"></i>
          </article>
        </article>
        <article class="footer__column">
          <h5>Explore</h5>
          <p>Marketplace</p>
          <p>Rankings</p>
          <p>Connect a wallet</p>
        </article>
        <article class="footer__column">
          <h5>Join our weekly digest</h5>

          <p>NFT marketplace UI created with Anima for Figma.</p>

          <EmailButton />
        </article>
      </section>
      <p class="footer__copy">Ⓒ NFT Market. Use this template freely.</p>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #3b3b3b;

  &__container {
    padding: 80px 0;
    max-width: 1200px;
    margin: 0 auto;
  }
  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    border-bottom: 1px solid #858584;
    padding-bottom: 40px;
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 700px) {
      padding: 20px;
      grid-template-columns: 1fr;
    }
  }
  &__column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  &__title {
    display: flex;
    gap: 1rem;
    align-items: center;
    i {
      font-size: 32px;
      color: var(--call-action-color);
    }
  }
  &__social {
    display: flex;
    gap: 1rem;
    align-items: center;
    i {
      font-size: 32px;
      color: var(--secondary-color);
      &:hover {
        cursor: pointer;
        color: var(--call-action-color);
      }
    }
  }
  &__copy {
    font-size: 0.75rem;
    line-height: 0.8rem;
    margin-top: 1rem;
  }
}
</style>
