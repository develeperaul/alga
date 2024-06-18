<template>
  <section class="ref-card tw-max-w-[430px] tw-mb-8" v-if="referralLink">
    <h2 class="tw-text-sm tw-mb-4">{{ t('title') }}</h2>
    <div class="tw-mb-2">
      <a :href="referralLink" target="_blank">{{ referralLink }}</a>
    </div>
    <div>
      <button class="tw-text-purple-light" @click="copyRefLink">{{ t('copy') }}</button>
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
      },
      "en-US": {
        title: 'My referral link',
        successCopy: 'Referral link copied!',
        copy: 'Copy',
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

<style scoped lang="scss">
  .ref-card {
    position: relative;
    padding: 35px 38px;
    background: rgba(255, 255, 255, 0.08);
    border: 1.04002px solid #575656;
    box-shadow: 0px 155.373px 62.149px rgba(1, 3, 24, 0.01),
      0px 87.2091px 52.125px rgba(1, 3, 24, 0.05),
      0px 39.0937px 39.0937px rgba(1, 3, 24, 0.09),
      0px 10.024px 21.0505px rgba(1, 3, 24, 0.1), 0px 0px 0px rgba(1, 3, 24, 0.1);
    border-radius: 7.80016px;
    & .filter {
      position: absolute;
      right: 16px;
      top: 15px;
    }
  }
</style>
