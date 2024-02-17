<template>
  <section class="imagenCard">
        <section class="imagenCard__container">
          <img src="@/assets/images/Image-Placeholder.jpg" alt="" />
          <article class="imagenCard__container__info">
            <p>Space Walking</p>
            <div class="imagenCard__container__info-profile">
              <img src="@/assets/images/Avatar.png" alt="" /><span>Animakid</span>
            </div>
          </article>
        </section>
      </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.imagenCard{
  padding: 40px;
  &__container{
    max-width: 500px;
    background: #3B3B3B;
    border-radius: var(--radius);
    color: white;
    img{
      width: 100%;
      border-radius: 20px 20px 0 0;
      object-fit: cover;
    }
    &__info{
      padding: 20px;
      p{
        font-weight: 600;
        font-size: 18px;
      }
      &-profile{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 15px;
        img{
          width: 15px;
        }
        span{
          font-size: 12px;
          
        }
      }
    }
  }
}


</style>