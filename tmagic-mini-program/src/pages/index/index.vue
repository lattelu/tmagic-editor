<template>
  <view class="index">
    <Counter />
    <button @tap="toDemo">to demo</button>
  </view>
</template>

<script lang="ts">
import "./index.scss";
import Counter from "../../components/Counter.vue";
import Taro from "@tarojs/taro";

export default {
  name: "Index",
  components: {
    Counter,
  },
  methods: {
    toDemo() {
      console.log("object");
      Taro.navigateTo({
        url: "/pages/demo/index",
      });
    },
  },
};
</script>
