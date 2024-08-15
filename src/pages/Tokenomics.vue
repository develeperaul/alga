<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 tw-mb-16">{{ t('title') }}</h1>
      <OfferContent class="tw-mb-10" />
      <!-- <OfferRounds class=" tw-mb-10" /> -->
      <OfferChart />
    </div>
  </q-page>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';
  import OfferContent from 'src/components/TokenomicsOffer/Content.vue';
  import OfferRounds from 'src/components/TokenomicsOffer/Rounds.vue';
  import OfferChart from 'src/components/TokenomicsOffer/Chart.vue';

  const messages = {
    'ru-RU': {
      title: 'Токеномика',
    },
    'en-US': {
      title: 'Tokenomics',
    },
  };

  const { t } = useI18n({ messages });
</script>
