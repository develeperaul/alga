<template>
  <div class="market-vol-report">
    <ul class="market-vol-report__points">
      <li class="vol-point" v-for="point in data.points">
        <span>
          <IconStar />
        </span>
        <span v-html="point"></span>
      </li>
    </ul>
    <div class="market-vol-report__chart-wrap">
      <img width="1080" height="964" src="./assets/graphic.png" loading="lazy" alt="график">
    </div>
  </div>
</template>

<script setup>
  import data from './data';
  import IconStar from './IconStar.vue';
</script>

<style scoped lang="scss">
  .market-vol-report {
    display: flex;
    flex-wrap: wrap;
    gap: 68px;

    @media screen and (max-width: 960px) {
      justify-content: center;
      gap: 32px;
    }

    &__points {
      max-width: 332px;
      flex-basis: 280px;
      flex-grow: 1;

      @media screen and (max-width: 960px) {
        max-width: 100%;
        flex-basis: 100%;
      }
    }

    &__chart-wrap {
      flex-grow: 1;
      max-width: 540px;
      flex-basis: 450px;
    }
  }

  .vol-point {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    font-size: 12px;
    line-height: 1.6;

    & + & {
      margin-top: 16px;
    }
  }
</style>
