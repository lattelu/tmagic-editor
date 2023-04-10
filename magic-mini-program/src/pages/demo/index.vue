<template>
  <PageVue v-if="app.appRef && app.appConfig" :app="app.appRef" :config="app.appConfig"></PageVue>
</template>
<script lang="ts" setup>
import { onMounted, provide } from 'vue';

import { useAppStore } from './appStore';
import PageVue from './Page.vue';
const app = useAppStore();

provide('app', app.appRef);
onMounted(() => {
  if (!app.appConfig) {
    app.getAppConfig();
  }
});
</script>
