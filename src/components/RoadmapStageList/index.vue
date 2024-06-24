<template>
  <section class="roadmap-items">
    <Item
      class="roadmap-items__item"
      v-for="item in data"
      :item="item"
    />
  </section>
</template>

<script setup>
  import Item from './Item';
  import data from './data';
</script>

<style scoped lang="scss">
  .roadmap-items {
    display: flex;
    flex-wrap: wrap;
    margin-left: -90px;
    margin-top: -18px;

    &__item {
      margin-left: 90px;
      margin-top: 18px;
      width: calc(50% - 90px);
    }
  }
</style>
