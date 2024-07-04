<template>
  <section class="card-bordered tw-max-w-[330px] tw-mb-8">
    <h2 class="tw-text-sm tw-mb-4">{{ t('title') }}:</h2>
    <p class="tw-mb-2">{{ t('subtitle') }}</p>
    <div class="tw-text-md2 tw-font-medium tw-mb-4">
      100$
    </div>
    <router-link class="tw-text-purple-light" :to="{ name: 'output-bonuses' }">
      {{ t('action') }}
    </router-link>
  </section>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';

  const i18n = {
    messages: {
      "ru-RU": {
        title: 'Мои бонусы',
        action: 'Заявка на вывод',
        subtitle: 'Вы заработали',
      },
      "en-US": {
        title: 'My balance',
        action: 'Withdraw bonuses',
        subtitle: 'You\'ve earned',
      },
    }
  };

  const { t } = useI18n(i18n);
</script>
