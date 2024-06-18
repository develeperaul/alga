<template>
  <q-layout
    style="min-height: 100vh"
    view="hhh lPr lff"
    class="app-page-bg--dark"
  >
    <q-header>
      <Landing headerOnly />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <Footer></Footer>
    </q-footer>
  </q-layout>
</template>

<script>
import Landing from "src/components/V3LangingRedisign/index.vue";
import Footer from "./Landing/FooterLayout.vue";

export default {
  components: {
    Landing,
    Footer,
  },
};
</script>

<style></style>
