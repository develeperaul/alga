<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">{{ t('title') }}</h1>
      <ProjectSchema class="tw-mb-16" />
      <section>
        <h2 class="app-h1 tw-mb-6">Емкость рынка индексов</h2>
        <MarketVolumeReport />
      </section>
    </div>
  </q-page>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';
  import ProjectSchema from 'src/components/ProjectSchema';
  import MarketVolumeReport from 'src/components/MarketVolumeReport';

  const messages = {
    'ru-RU': {
      title: 'Как работает проект',
    },
    'en-US': {
      title: 'How it works',
    },
  };

  const { t } = useI18n({ messages });
</script>
