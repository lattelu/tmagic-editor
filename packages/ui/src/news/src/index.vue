<template>
  <div class="magic-ui-news">
    <div class="title">titl333e</div>
    {{ props.config.text }}
  </div>
</template>
<script lang="ts" setup>
import { MButton } from '../../types';
import useApp from '../../useApp';

interface PropsType {
  config: MButton;
}
const props = withDefaults(defineProps<PropsType>(), {
  // @ts-ignore
  config: {},
});

useApp(props);
</script>
<style>
.magic-ui-news {
  width: 120px;
  height: 32px;
}
</style>
