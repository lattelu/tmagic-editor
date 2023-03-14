<template>
  <view class="demo" @tap="onPageTap">
    <magic-ui-page :config="pageConfig"></magic-ui-page>
  </view>
</template>
<script lang="ts" setup>
import { useLoad } from '@tarojs/taro';

import { provide, reactive } from 'vue';
import mockData from '@/mock';
import Core, { getCommonEventName } from '@tmagic/core';
import { getUrlParam } from '@tmagic/utils';
const app = new Core({
  designWidth: 750,
  config: mockData,
  platform: 'mini',
  curPage: getUrlParam('page'),
});

const onPageTap = (e) => {
  console.log('%c Line:18 🥕 e', 'color:#e41a6a', e.target.id);
  const id = e.target.id;
  console.log('%c Line:18 🥕 e', 'color:#e41a6a', app);

  const node = app.page?.getNode(id);
  if (node) {
    app.emit(getCommonEventName('click'), node);
  }
};

provide('app', app);

// const app = inject<Core | undefined>("app");
const pageConfig = reactive(app?.page?.data || {});
useLoad((options) => {
  console.log('%c Line:14 🍧 options', 'color:#2eafb0', options);
});
</script>
<style scoped>
.demo {
}
</style>
