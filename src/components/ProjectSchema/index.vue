<template>
  <div class="project-schema">
    <img class="tw-mx-auto" :width="schema.width" :height="schema.height" :src="schema.path" alt="схема работы проекта">
  </div>
</template>

<script setup>
  import useLocal from 'src/composition/V3/useLocal';
  import { computed } from 'vue';

  const { locale } = useLocal();

  const schemes = {
    'English': {
      width: '1242',
      height: '976',
      path: require('./assets/schema-en.png'),
    },
    'Русский': {
      width: '1236',
      height: '960',
      path: require('./assets/schema-ru.png'),
    },
  };

  const schema = computed(() => {
    return schemes[locale.value];
  });
</script>

<style scoped lang="scss">
  .project-schema {
    img {
      max-width: 618px;
      width: 100%;
    }
  }
</style>
