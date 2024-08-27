<template>
  <section class="card-bordered tw-max-w-[330px] tw-mb-8">
    <h2 class="tw-text-sm tw-mb-4">{{ t('title') }}:</h2>
    <p class="tw-mb-2">{{ t('subtitle') }}</p>
    <div class="tw-text-md2 tw-font-medium tw-mb-4" v-if="balance">
      {{Number(balance.balance).toFixed(2)}}$
    </div>
    <div class="tw-text-md2 tw-font-medium tw-mb-4" v-else>
      0$
    </div>
    <div class=" tw-grid tw-gap-3">

      <router-link class="tw-text-purple-light" :to="{ name: 'output-bonuses' }">
        {{ t('action') }}
      </router-link>
      <router-link class="tw-text-purple-light" :to="{ name: 'referals-history' }">
        {{ t('linkHistory') }}
      </router-link>
    </div>

  </section>
</template>

<script setup>
import { computed } from "vue"
  import { useI18n } from 'vue-i18n';
  import { useStore } from "vuex";
  const i18n = {
    messages: {
      "ru-RU": {
        title: 'Мои бонусы',
        action: 'Заявка на вывод',
        subtitle: 'Ваш баланс',
        linkHistory: "История бонусов"
      },
      "en-US": {
        title: 'My balance',
        action: 'Withdraw bonuses',
        subtitle: 'Your balance',
        linkHistory: "History of bonuses"
      },
    }
  };

  const store = useStore();
const { t } = useI18n(i18n);

  const balance = computed(
    () => store.state.promo.balance
  )
</script>
