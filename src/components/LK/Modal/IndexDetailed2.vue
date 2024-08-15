<template>
  <q-dialog :model-value="showed" @update:model-value="updateShowed"  class=" ">
    <div class="tw-w-full tw-py-4  tw-bg-black tw-overflow-hidden tw-grid tw-grid-rows-[auto_1fr]" >
      <div class="tw-text-right tw-px-4" >
        <q-btn round icon="close" @click="updateShowed(false)" />
      </div>
      <div class=" tw-overflow-auto tw-px-4">
        <div class=" tw-grid xl:tw-grid-cols-[1fr_auto] tw-gap-5 tw-mb-4">
          <h4 class=" ">
            {{ derivative.name }}
          </h4>
          <base-button


                  class="button  tw-w-full "
                  @click="$router.push({ name: 'index-directive', query: { 'buy': derivative.id } })"
                  >{{ t("buy") }}</base-button>
        </div>
        <div
          style="width: 170px"
          class="tw-justify-items-center tw-mx-auto tw-mb-10"
        >

          <RoundDiagram
            class="inside__round"
            :values="roundDiagram.values"
            :colors="roundDiagram.colors"
          >
            <template #image>
              <image
                x="180"
                y="180"
                width="140"
                :xlink:href="derivative.image.url"
              />
            </template>
          </RoundDiagram>
        </div>
        <div class="inside">
          <div class="table">
            <div class="table-head tw-mb-5">
              <!-- <h4 class="">
                {{ t("inside.title") }}
              </h4> -->
              <div class="head-items">
                <span>{{ t("inside.title") }}</span>
                <span> cost </span>
                <span> alteration </span>
              </div>
            </div>
            <ul class="table-body coinlist">
              <li
                class="item tw-flex tw-justify-between tw-items-center"
                v-for="currency in derivative['currency_shares']"
                :key="derivative.id + '_' + currency.id"
              >
                <div class="tw-flex tw-gap-3-1 tw-items-center">
                  <img
                    :src="currency.image.url"
                    alt="bitcoin"
                    width="30"
                    height="30"
                    class="tw-rounded-full"
                  />
                  <span>{{ currency.name }}</span>
                </div>
                <span>{{ currency["percent_share"] }}%</span>
                <span>{{ currency["percent_share"] }}%</span>
              </li>
            </ul>
            <div class=" tw-mt-4">
              {{ derivative.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-dialog>
</template>

<script setup>
  import RoundDiagram from "src/components/V3/RaoundDiagram.vue";
  import { useI18n } from "vue-i18n";
  const i18n = {
  messages: {
    "en-US": {
      buy: "Buy",
      titleSidebar: "Derivatives",

      inside: {
        title: "What's inside",
      },

    },
    "ru-RU": {
      buy: "Купить",
      titleSidebar: "Деривативы",

      inside: {
        title: "Что внутри",
      },

    },
  },
};
  const props = defineProps({
    showed: {
      required: true,
      type: Boolean,
    },
    roundDiagram: {
      required: true,
      type: Object,
    },
    derivative: {
      required: true,
      type: Object,
    }
  });

  const emit = defineEmits(['update:showed']);

  function updateShowed(value) {
    emit('update:showed', value)
  }

  const { t } = useI18n(i18n);
</script>

<style scoped lang="scss">
//$
.inside {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  & .table {
    width: 100%;
    &-head {
      padding: 10px 12px 10px 12px;
      @screen xl {
        padding: 10px 77px 10px 18px;
        display: flex;
        gap: 0;
        align-items: center;
      }

      .head-items {
        display: grid;
        grid-template-columns: 1fr 0.5fr 0.5fr;
        margin-top: 10px;
        @screen xl {
          margin-top: 0px;
          flex-grow: 1;
          grid-template-columns: 200px 0.5fr 0.5fr;
        }
      }

      & *:not(:first-child) {
        justify-self: center;
      }
    }
    &-body {
      @apply tw-border tw-border-gray-border;

      .item {
        padding: 10px 12px 10px 12px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 0.5fr 0.5fr;
        @screen xl {
          padding: 10px 77px 10px 18px;
          grid-template-columns: 200px 0.5fr 0.5fr;
        }
        &:not(:last-child) {
          @apply tw-border-b tw-border-gray-border;
        }
        & *:not(:first-child) {
          justify-self: center;
        }
      }
    }
  }
  @include screen-xl {
    flex-direction: row;
    gap: 110px;
    align-items: center;
  }
  &-card {
    width: 100%;
    height: 100%;
    @include screen-xl {
      width: 340px;
      height: 340px;
    }
  }
  &__round {
    width: 100%;
    height: 100%;
  }
}
</style>
