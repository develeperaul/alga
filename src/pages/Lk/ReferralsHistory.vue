<template>
  <q-page class="tw-pb-20 tw-overflow-hidden">

    <Suspense>
      <div class="tw-container">
        <h1 class="h2 tw-mb-10">{{ t('title') }}</h1>
        <div class="switch tw-mb-10">
          <span
            class="option active"
            @click="choiceList(1, buyList?.length > 0 ? true : false)"
          >
            {{ t("tab1") }}

            <div class="option__line">
              <!-- <div class="option__line-active"></div> -->
              <transition
                appear
                mode="out-in"
                :enter-active-class="fadeIn"
                :leave-active-class="fadeOut"
              >
                <div class="option__line-active" v-if="activeNav == 1"></div>
              </transition>
            </div>
          </span>
          <span
            class="option"
            @click="choiceList(2, widthdrawalList?.length > 0 ? true : false)"
          >
            {{ t("tab2") }}
            <div class="option__line">
              <transition
                appear
                mode="out-in"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
              >
                <div class="option__line-active" v-if="activeNav == 2"></div>
              </transition>
            </div>
          </span>
        </div>

         <transition
          appear
          mode="out-in"
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
        >
            <TableReferralsOutcomes v-if="activeContent == 1"/>
            <TableReferralsSkims v-else-if="activeContent == 2"/>

        </transition>

      </div>
    </Suspense>
  </q-page>
</template>

<script setup>
  import { ref, onMounted, computed } from "vue";
  import { useI18n } from 'vue-i18n';
  import TableReferralsOutcomes from 'src/components/LK/Table/ReferralsOutcomes.vue';
  import TableReferralsSkims from 'src/components/LK/Table/ReferralsSkims.vue';
  import CardRefLink from 'src/components/LK/Card/RefLink.vue';
  import RefBalance from 'src/components/LK/Card/RefBalance.vue';
  import { useStore } from "vuex";
  const i18n = {
    messages: {
      "ru-RU": {
        title: "История бонусов",
        title2: "Мои рефералы",
        tab1: "Списания",
        tab2: "Заявки на вывод"
      },
      "en-US": {
        title: "History of bonuses",
        title2: "My referrals",
        tab1: "Write-offs",
        tab2: "Applications for conclusion"
      },
    }
  };
  const store = useStore();

const { t } = useI18n(i18n);

  const activeNav = ref(1);
  const activeContent = ref(1);
  const fadeIn = ref("animated fadeInLeft");
  const fadeOut = ref("animated fadeOutRight");
  const choiceList = (index) => {
    activeContent.value = index;
    if (index < activeNav.value) {
      fadeIn.value = "animated fadeInRight";
      fadeOut.value = "animated fadeOutLeft ";
    } else {
      fadeIn.value = "animated fadeInLeft";
      fadeOut.value = "animated fadeOutRight";
    }
    activeNav.value = index;
  };
  onMounted(async() => {
    await store.dispatch("promo/getBalance")
  })
</script>
<style lang="scss" scoped>
.switch {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  position: relative;
  @include screen-xl {
    grid-template-columns: repeat(2, 200px);
  }
  .option {
    padding-bottom: 20px;
    position: relative;
    cursor: pointer;
    $option: &;
    &__line {
      margin-top: 20px;
      width: 100%;
      height: 1px;
      background: #000320;
      &-active {
        width: 100%;
        height: 1px;
        background: #4ad66d;
      }
    }
  }
}

</style>
