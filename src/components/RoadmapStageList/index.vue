<template>
  <section class="roadmap-items">
    <Item
      class="roadmap-items__item"
      v-for="item in items"
      :item="item"
    />
  </section>
</template>

<script setup>
  import Item from './Item';
  import data from './data';

  import useLocal from 'src/composition/V3/useLocal';
  import { computed } from 'vue';

  const { locale } = useLocal();

  const itemsLangs = {
    'English': data.stagesEn,
    'Русский': data.stagesRu,
  };

  const items = computed(() => {
    return itemsLangs[locale.value];
  });
</script>

<style scoped lang="scss">
  .roadmap-items {
    display: flex;
    flex-wrap: wrap;
    margin-left: -90px;
    margin-top: -32px;

    &__item {
      margin-left: 90px;
      margin-top: 32px;
      width: calc(50% - 90px);

      @media screen and (max-width: 930px) {
        width: calc(100% - 90px);
      }
    }
  }
</style>
