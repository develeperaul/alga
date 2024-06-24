<template>
  <article class="roadmap-item">
    <div class="roadmap-item__wrap">
      <div class="roadmap-item__icon-wrap">
        <img :width="item.icon.width" :height="item.icon.height" :src="item.icon.path" alt="иконка шага">
      </div>
      <div class="roadmap-item__body">
        <div class="roadmap-item__head">
          <h2 class="roadmap-item__title">{{ item.title }}</h2>
          <p class="roadmap-item__period">{{ item.period }}</p>
        </div>
        <ul class="roadmap-item__steps">
          <li
            class="roadmap-item__step"
            v-for="step in item.steps"
          >
            {{ step }}
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script setup>
  defineProps({
    item: {
      required: true,
      type: Object,
    }
  });
</script>

<style scoped lang="scss">
  .roadmap-item {
    &__wrap {
      display: flex;
      gap: 28px;
      align-items: flex-start;
    }

    &__icon-wrap {
      width: 141px;
      height: 108px;
      flex-shrink: 0;

      img {
        width: 100%;
        height: auto;
      }
    }

    &__body {
      @apply tw-font-stolzl tw-text-white;
    }

    &__head {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      gap: 20px;
      margin-bottom: 10px;
    }

    &__title {
      font-size: 18px;
      line-height: 1.2;
      @apply tw-font-normal;
    }

    &__period {
      font-size: 10px;
      line-height: 1.3;
      color: #575656;
      @apply tw-font-normal;
    }

    &__steps {
      padding-left: 10px;
      list-style: disc;
      font-size: 10px;
      line-height: 1.4;
    }

    &__step {
      & + & {
        margin-top: 4px;
      }
    }
  }
</style>
