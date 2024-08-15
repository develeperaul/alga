<template>
  <section>
    <img :width="chart.width" :height="chart.height" :src="chart.path" alt="график" loading="lazy">
  </section>
</template>

<script setup>
  import useLocal from 'src/composition/V3/useLocal';
  import { computed } from 'vue';

  const { locale } = useLocal();

  const charts = {
    'English': {
      width: '1040',
      height: '327',
      path: require('./assets/chart-en.svg'),
    },
    'Русский': {
      width: '994',
      height: '307',
      path: require('./assets/chart-ru.svg'),
    },
  };

  const chart = computed(() => {
    return charts[locale.value];
  });
</script>
