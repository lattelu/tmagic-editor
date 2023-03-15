<template>
  <view class="page-container" @tap="onPageTap">
    <magic-ui-page :config="pageConfig" v-if="app && (appConfig || pageConfig)"></magic-ui-page>
  </view>
</template>
<script lang="ts" setup>
import { useLoad } from '@tarojs/taro';
import Taro from '@tarojs/taro';
import App, { getCommonEventName } from '@tmagic/core';
import { MApp } from 'packages/schema/types';
import { computed, provide, ref, shallowRef, toRefs, watch } from 'vue';

type PropsType = {
  config: MApp;
  app: App;
};
const props = defineProps<PropsType>();

const { app } = toRefs(props);
const pageId = ref('');
const appConfig = shallowRef<MApp | undefined>(undefined);
useLoad((options) => {
  // 晚于setup
  if (options.pageId) {
    pageId.value = options.pageId;
  }
});

const pageConfig = computed(() => {
  if (pageId.value) {
    const page = app.value.pages.get(pageId.value);
    return page?.data;
  }
  return app.value.page?.data;
});

provide('app', app.value);

app.value.addListener('navigateTo', (pageId) => {
  Taro.navigateTo({
    url: `/pages/demo/index?pageId=${pageId}`,
  });
});

const onPageTap = (e) => {
  const id = e.target.id;

  const node = app.value.page?.getNode(id);
  if (node) {
    app.value.emit(getCommonEventName('click'), node);
  }
};

/** 设置页面标题 */
watch(
  pageConfig,
  (config) => {
    if (!config || !config.title) return;
    Taro.setNavigationBarTitle({
      title: config.title,
    });
  },
  {
    immediate: true,
  },
);
</script>
