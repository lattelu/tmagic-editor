import App from '@tmagic/core';
import { getUrlParam } from '@tmagic/utils';
import { MApp } from 'packages/schema/types';
import { defineStore } from 'pinia';
import { computed, inject, shallowRef, watch } from 'vue';

import mockData from '@/mock';

export const useAppStore = defineStore('t-magic-app', () => {
  const appConfig = shallowRef<MApp | undefined>(undefined);
  const shallowRefApp = shallowRef<App | undefined>(undefined);
  const appRef = computed(() => {
    if (typeof shallowRefApp.value != 'undefined') {
      return shallowRefApp.value;
    }

    const appInInject = inject<App | undefined>('app', undefined);
    if (typeof appInInject != 'undefined') {
      shallowRefApp.value = appInInject;

      return shallowRefApp.value;
    }
    return shallowRefApp.value;
  });

  function getAppConfig() {
    if (shallowRefApp.value?.pageConfigLoaded) return;
    setTimeout(() => {
      console.log('%c in setTimeout', 'color:#f5ce50', 'request data');
      appConfig.value = mockData as unknown as MApp;
      console.log('%c after setTimeout', 'color:#f5ce50', appConfig.value, shallowRefApp.value);
    }, 1009);
  }
  function setApp(_config) {
    const app = new App({
      config: _config,
      platform: 'mini',
      curPage: getUrlParam('page'),
    });
    shallowRefApp.value = app;
  }
  watch(appConfig, (_config) => {
    setApp(_config);
  });
  return { shallowRefApp, appConfig, appRef, getAppConfig };
});
