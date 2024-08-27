<template>
  <AppPagination :disable="complete" @load="fetcher">
    <div class="tw-overflow-x-auto tw-cursor-grab tw-grid tw-gap-4" v-if="data">
      <div
        class="tw-gap-7"
        style="
          display: grid;
          grid-template-columns: 200px 280px 150px;
          padding: 10px 30px;
        "
      >
        <p>{{ t("table.columns[0]") }}</p>
        <p>{{ t("table.columns[1]") }}</p>
        <p>{{ t("table.columns[2]") }}</p>
      </div>
      <div v-if="data.length === 0">
        <p class="tw-text-center tw-py-8">{{ t("table.emptyLabel") }}</p>
      </div>
      <div v-else class="tw-flex tw-flex-col tw-gap-2.5" ref="content">
        <div
          class="item card card__border-line tw-items-center tw-gap-7"
          v-for="row in data"
        >
          <div>{{ row.id }}</div>
          <div>{{ Number(row.amount).toFixed(2) ?? '-' }}</div>
          <div>{{ dayjs(row.created_at).format("DD.MM.YYYY") }}</div>
        </div>
      </div>
    </div>
  </AppPagination>
</template>

<script setup>
import { useI18n } from "vue-i18n";
  import dayjs from "dayjs";
  import * as ReferralsAPI from 'src/api/referrals';
  import AppPagination from "src/core/AppPagination.vue";
  import usePagination from 'src/composition/usePagination';

  const i18n = {
    messages: {
      "ru-RU": {
        table: {
          columns: [  'Id',  "Количество",'Дата создания' ],
          emptyLabel: 'Еще нет списаний',
        },
      },
      "en-US": {
        table: {
          columns: [ 'Id',"Amount", 'Created_at' ],
          emptyLabel: 'No available data',
        },
      },
    }
  }

  const { t } = useI18n(i18n);

  const { fetcher, complete, data } = usePagination(ReferralsAPI.getOutcomes);
</script>

<style scoped lang="scss">
  .item {
    min-width: max-content;
    width: 100%;
    display: grid;
    grid-template-columns: 200px 280px 150px;
    & * {
      white-space: nowrap;
    }
  }
</style>
