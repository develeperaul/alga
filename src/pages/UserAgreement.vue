<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">{{ t('title') }}</h1>
      <div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quam voluptatum minus possimus dolor amet laborum voluptatem iure repellendus numquam modi, consequuntur nobis neque eligendi quis eveniet culpa voluptas.</p>
      </div>
    </div>
  </q-page>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';

  const messages = {
    'ru-RU': {
      title: 'Пользовательское соглашение',
    },
    'en-US': {
      title: 'User agreement',
    },
  };

  const { t } = useI18n({ messages });
</script>
