<template>
  <AppAlert />
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import { useMeta } from "quasar";
import { useI18n } from "vue-i18n";
import { SplashScreen } from '@capacitor/splash-screen';



const i18n = {
  messages: {
    "ru-RU": {
      meta: {
        "og:desctrition":
          "Alga - это новый вид инвестирования. Наша цель - сформировать совершенно новую “точку входа” на рынок, чтобы сделать криптовалюты еще более демократичным финансовым инструментом.",
      },
    },
    "en-US": {
      meta: {
        "og:desctrition":
          "Alga is a new kind of investing. Our goal is to form a completely new “entry point” into the market to make cryptocurrencies even more democratic financial tool.",
      },
    },
  },
};
export default defineComponent({
  name: "App",
  setup() {
    const { t } = useI18n(i18n);
    onMounted(async()=>await SplashScreen.hide())
  },
});
</script>
