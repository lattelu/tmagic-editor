<template>
  <routeLink></routeLink>
</template>
<script lang="tsx" name="RouteLink" setup>
import { MButton } from '../../types';
import useApp from '../../useApp';

interface PropsType {
  config: MButton;
}
const props = defineProps<PropsType>();
const app = useApp(props);
const routeLink = () => <div class={app?.platform === 'editor' ? 'link-in-editor' : ''}>1</div>;
</script>
<style lang="less" scoped>
.src {
}
</style>
