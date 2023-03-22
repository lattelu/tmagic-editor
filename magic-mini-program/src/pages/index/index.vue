<template>
  <view class="index">
    <Counter />
    <button @tap="toDemo">to demo</button>
  </view>
</template>

<script lang="ts">
import './index.scss';

import Taro from '@tarojs/taro';

import Counter from '../../components/Counter.vue';

export default {
  name: 'Index',
  components: {
    Counter,
  },
  methods: {
    toDemo() {
      console.log('object');
      Taro.navigateTo({
        url: '/pages/demo/index',
      });
    },
  },
};
</script>
