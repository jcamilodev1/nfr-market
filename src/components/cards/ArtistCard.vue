<template>
  <article class="artistCard">
    <img src="@/assets/images/ArtistAvatar.png" alt="" />
    <h2>Keepitreal</h2>
    <p><span>Total Sales: </span> 34.53 ETH</p>
    <div>1</div>
  </article>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.artistCard {
  display: grid;
  background-color: #3b3b3b;
  border-radius: var(--radius);
  padding: 20px;
  justify-items: center;
  min-width: 250px;
  position: relative;
  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }
  h2 {
    font-size: 25px;
    margin: 15px 0;
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
