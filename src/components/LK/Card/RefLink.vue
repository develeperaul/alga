<template>
  <section class="card-bordered tw-max-w-[430px] tw-mb-8" v-if="referralLink">
    <h2 class="tw-text-sm tw-mb-4">{{ t('title') }}</h2>
    <div class="tw-mb-2">
      <a :href="referralLink" target="_blank">{{ referralLink }}</a>
    </div>
    <div>
      <button class="tw-text-purple-light" @click="copyRefLink">{{ t('copy') }}</button>
    </div>
    <div class=" tw-mt-3 tw-text-xs" >
      {{t('profit')}}
      <span class=" tw-text-green">
        30%
      </span>
    </div>
  </section>
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { useI18n } from 'vue-i18n';
  import { AppAlert } from "src/plugins/app-alert";

  const i18n = {
    messages: {
      "ru-RU": {
        title: 'Моя реферальная ссылка',
        successCopy: 'Реферальная ссылка скопирована!',
        copy: 'Скопировать',
        profit: "Процент прибыли от сделок клиентов"
      },
      "en-US": {
        title: 'My referral link',
        successCopy: 'Referral link copied!',
        copy: 'Copy',
        profit: "Profits From Your Clients' Trades"
      },
    }
  };

  const { t } = useI18n(i18n);
  const store = useStore();
  const referralLink = computed(() => store.getters["profile/referralLink"]);

  function copyRefLink() {
    navigator.clipboard.writeText(referralLink.value);
    AppAlert({
      message: t('successCopy'),
      type: "positive",
    });
  }
</script>
