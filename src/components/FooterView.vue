<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <section class="footer__container">
      <div class="footer__content">
        <div class="footer__column">
          <div class="footer__title">
            <i class="ti ti-building-store"></i>
            <h5>NFT Marketplace</h5>
          </div>
          <p>NFT marketplace UI created with Anima for Figma.</p>
          <p>Join our community</p>
          <div class="footer__social">
            <i class="ti ti-brand-discord"></i>
          </div>
        </div>
        <div class="footer__column">
          <h5>Explore</h5>

          <p>Marketplace</p>
          <p>Rankings</p>
          <p>Connect a wallet</p>
        </div>
        <div class="footer__column">
          <h5>Join our weekly digest</h5>

          <p>NFT marketplace UI created with Anima for Figma.</p>
        </div>
      </div>
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
}
</style>
