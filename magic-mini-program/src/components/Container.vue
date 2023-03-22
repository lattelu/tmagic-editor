<template>
  <TComponent :config="config">
    <TComponent v-for="item in config.items" :key="item.id" :config="item"></TComponent>
  </TComponent>
</template>

<script lang="ts" setup>
import type { MContainer } from '@tmagic/schema';

import TComponent from './Component/index.vue';

defineProps<{
  config: MContainer;
}>();
</script>
