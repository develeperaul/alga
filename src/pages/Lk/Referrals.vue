<template>
  <q-page class="tw-pb-20 tw-overflow-hidden">
    <Suspense>
      <div class="tw-container">
        <h1 class="h2 tw-mb-10">{{ t('title') }}</h1>
        <div class="tw-flex tw-flex-wrap tw-gap-6 tw-justify-between tw-items-start">
          <CardRefLink class="tw-mb-10 tw-w-full" />
          <RefBalance class="tw-w-full" />
        </div>
        <section>
          <h2 class="h4 tw-mb-5">{{ t('title2') }}</h2>
          <TableReferrals />
        </section>
      </div>
    </Suspense>
  </q-page>
</template>

<script setup>
  import { onMounted } from "vue"
  import { useI18n } from 'vue-i18n';
  import TableReferrals from 'src/components/LK/Table/Referrals.vue';
  import CardRefLink from 'src/components/LK/Card/RefLink.vue';
  import RefBalance from 'src/components/LK/Card/RefBalance.vue';
  import { useStore } from "vuex";
  const i18n = {
    messages: {
      "ru-RU": {
        title: "Реферальная программа",
        title2: "Мои рефералы",
      },
      "en-US": {
        title: "Referral program",
        title2: "My referrals",
      },
    }
  };
  const store = useStore();

const { t } = useI18n(i18n);

  onMounted(async() => {
    await store.dispatch("promo/getBalance")
  })
</script>
