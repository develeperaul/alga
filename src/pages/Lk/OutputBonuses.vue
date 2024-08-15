<template>
  <q-page class="tw-pb-20 tw-overflow-hidden">
    <div class="tw-container">
      <h1 class="h2 tw-mb-10">{{ t('title') }}</h1>
      <div class="card-bordered tw-mb-8 tw-inline-block">
        <p class="tw-mb-2 tw-text-white tw-text-base">{{ t('bonuseTitle') }}:</p>
        <p class="tw-text-base tw-text-white tw-font-medium">100$</p>
      </div>
      <form class="tw-max-w-[420px]" @submit.prevent="onSubmit">
        <AppInput name="address" class="tw-mb-8" :label="t('addressLabel')" v-model="address" />
        <AppInput name="sum" class="tw-mb-8" :label="t('sumLabel')" v-model="sum" type="number" />
        <AppButton class="tw-w-full" type="submit">{{ t('submitLabel') }}</AppButton>
      </form>
    </div>
  </q-page>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';
  import { AppAlert } from "src/plugins/app-alert";
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const i18n = {
    messages: {
      "ru-RU": {
        title: 'Вывод реферальных бонусов',
        maxSumError: 'Недостаточно средства, ваш баланс:',
        minSumError: 'Минимальная сумма вывода:',
        successSubmit: 'Ваша заявка на вывод успешно отправлена!',
        bonuseTitle: 'Мои бонусы',
        sumLabel: 'Сумма',
        addressLabel: 'Адрес вашего кошелька TRC-20',
        submitLabel: 'Вывести',
      },
      "en-US": {
        title: 'Withdraw referral bonuses',
        maxSumError: 'Insufficient funds, your balance:',
        minSumError: 'Minimum withdrawal amount:',
        successSubmit: 'Your withdrawal request has been successfully sent!',
        bonuseTitle: 'My bonuses',
        sumLabel: 'Amount',
        addressLabel: 'Your wallet address TRC-20',
        submitLabel: 'Withdraw',
      },
    }
  };

  const { t } = useI18n(i18n);

  const sum = ref('0');
  const address = ref('0x');

  function onSubmit() {
    const _sum = Number(sum.value);

    if(_sum > 100) {
      AppAlert({
        message: () => t('maxSumError') + ' ' + '100$',
        type: "negative",
      });
    } else if(_sum <= 0) {
      AppAlert({
        message: () => t('minSumError') + ' ' + '1$',
        type: "negative",
      });
    }
     else {
      router.push({ name: 'referals' });
      AppAlert({
        message: () => t('successSubmit'),
        type: "positive",
      });
    }
  }
</script>
