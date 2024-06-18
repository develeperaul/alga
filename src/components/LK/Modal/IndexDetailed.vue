<template>
  <q-dialog :model-value="showed" @update:model-value="updateShowed" maximized>
    <q-card class="tw-w-full tw-bg-black">
      <q-card-section class="tw-text-right">
        <q-btn round icon="close" @click="updateShowed(false)" />
      </q-card-section>
      <q-card-section>
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
              <div class="head-items">
                <span></span>
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
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
  import RoundDiagram from "src/components/V3/RaoundDiagram.vue";

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
</script>
