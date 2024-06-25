<template>
  <section class="offer-rounds">
    <article class="offer-rounds__item">
      <p class="offer-rounds__title">Первый раунд</p>
      <div class="offer-rounds__body">
        <p class="offer-rounds__option">
          Цена токена: <span class="offer-rounds__amount">$0.154</span>
        </p>
        <p class="offer-rounds__option">
          Оценка проекта: <span class="offer-rounds__amount">$7.700.000</span>
        </p>
        <p class="offer-rounds__option">
          Привлекаемый капитал: <span class="offer-rounds__amount">$1.000.000</span>
        </p>
      </div>
    </article>
    <article class="offer-rounds__item">
      <p class="offer-rounds__title">Второй раунд</p>
      <div class="offer-rounds__body">
        <p class="offer-rounds__option">
          Цена токена: <span class="offer-rounds__amount">$0.429</span>
        </p>
        <p class="offer-rounds__option">
          Оценка проекта: <span class="offer-rounds__amount">$19.600.000</span>
        </p>
        <p class="offer-rounds__option">
          Привлекаемый капитал: <span class="offer-rounds__amount">$1.500.000</span>
        </p>
      </div>
    </article>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .offer-rounds {
    border: 1px solid #a0a0a0;
    border-radius: 12px;
    backdrop-filter: blur(30px);
    background: rgba(217, 217, 217, 0.05);
    padding: 16px 22px;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;

    &__title {
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 1.3;
      @apply tw-text-white tw-font-medium;
    }

    &__option {
      font-size: 12px;
      line-height: 1.4;
      @apply tw-text-white;

      & + & {
        margin-top: 12px;
      }
    }

    &__amount {
      color: #51F679;
    }
  }
</style>
