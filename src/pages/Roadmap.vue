<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">{{ t('title') }}</h1>
      <RoadmapStageList />
    </div>
  </q-page>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';
  import RoadmapStageList from 'src/components/RoadmapStageList';

  const messages = {
    'ru-RU': {
      title: 'Дорожная карта',
    },
    'en-US': {
      title: 'Roadmap',
    },
  };

  const { t } = useI18n({ messages });
</script>
