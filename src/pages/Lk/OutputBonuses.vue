<template>
  <q-page class="tw-pb-20 tw-overflow-hidden">
    <div class="tw-container">
      <h1 class="h2 tw-mb-10">{{ t('title') }}</h1>
      <div class="card-bordered tw-mb-8 tw-inline-block">
        <p class="tw-mb-2 tw-text-white tw-text-base">{{ t('bonuseTitle') }}:</p>
        <p class="tw-text-base tw-text-white tw-font-medium" v-if="balance">{{ Number(balance.balance).toFixed(2) }}$</p>
        <p class="tw-text-base tw-text-white tw-font-medium" v-else>0$</p>
      </div>
      <form class="tw-max-w-[420px]" @submit.prevent="onSubmit">
        <AppInput name="address" class="tw-mb-8" :label="t('addressLabel')" v-model="address" />
        <!-- <AppInput name="sum" class="tw-mb-8" :label="t('sumLabel')" v-model="sum" type="number" /> -->
        <AppButton class="tw-w-full" type="submit">{{ t('submitLabel') }}</AppButton>
      </form>
    </div>
  </q-page>
</template>

<script setup>
  import {computed,onMounted} from "vue"
  import { useI18n } from 'vue-i18n';
  import { AppAlert } from "src/plugins/app-alert";
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useStore } from "vuex";
  import { useQuasar } from "quasar";
  import * as ReferralsAPI from 'src/api/referrals';
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
  const $q = useQuasar();
  const store = useStore();
  // const sum = ref('0');
  const address = ref('');
  const balance = computed(
    () => store.state.promo.balance
  )

  async function onSubmit() {
    if (balance.value) {
      try {
        $q.loading.show();

        const { data: d } = await ReferralsAPI.skims(address.value, balance.value.withdrawable);
          router.push({ name: 'referals' });
          AppAlert({
            message: () => t('successSubmit'),
            type: "positive",
          });

      }
      catch (e) {
        if (!e.response) throw e;
      if (e.response.status === 422) {
        const { errors } = await e.response.json();
        AppAlert({
          message: () => errors.amount[0],
          type: "negative",
        });
      } else throw e;
        // throw e;
      }
      finally {
        $q.loading.hide();
      }
    }
    // const _sum = Number(sum.value);

    // if(_sum > 100) {
    //   AppAlert({
    //     message: () => t('maxSumError') + ' ' + '100$',
    //     type: "negative",
    //   });
    // } else if(_sum <= 0) {
    //   AppAlert({
    //     message: () => t('minSumError') + ' ' + '1$',
    //     type: "negative",
    //   });
    // }
    //  else {
    //   router.push({ name: 'referals' });
    //   AppAlert({
    //     message: () => t('successSubmit'),
    //     type: "positive",
    //   });
    // }
  }

onMounted(async () => {
  if (balance.value === null) {

    await store.dispatch("promo/getBalance")
    }
  })
</script>
