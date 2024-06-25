<template>
  <section class="offer-content">
    <h2 class="offer-content__title">Общее предложение: <span class="offer-content__count">50млн токенов</span></h2>
    <p class="offer-content__text">Особенное внимание уделено распределению токенов с целью создания сбалансированной структуры, обеспечивающей долгосрочную жизнеспособность проекта и укрепляющей доверие инвесторов</p>
  </section>
</template>

<style scoped lang="scss">
  .offer-content {
    &__title {
      font-size: 20px;
      line-height: 1.2;
      font-weight: 500;
      margin-bottom: 16px;
    }

    &__text {
      font-size: 14px;
      line-height: 1.4;
      max-width: 570px;
      @apply tw-text-white;
    }

    &__count {
      color: #51F679;
    }
  }
</style>
