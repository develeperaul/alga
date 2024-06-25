<template>
  <section class="offer-content">
    <h2 class="offer-content__title">{{ t('title') }} <span class="offer-content__count">{{ t('amount') }}</span></h2>
    <p class="offer-content__text">{{ t('text') }}</p>
  </section>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';

  const messages = {
    'en-US': {
      title: 'Max. supply:',
      amount: '50M Tokens',
      text: 'Significant attention was given to token allocation. The aim was to create a balanced  distribution that would ensure the project\'s long-term viability and bolster investor  confidence',
    },
    'ru-RU': {
      title: 'Общее предложение:',
      amount: '50млн токенов',
      text: 'Особенное внимание уделено распределению токенов с целью создания сбалансированной структуры, обеспечивающей долгосрочную жизнеспособность проекта и укрепляющей доверие инвесторов',
    },
  };

  const { t } = useI18n({ messages });
</script>

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
