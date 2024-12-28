<template>
  <div id="app">
    <div>
      <HelloWorld v-model="sharedMessage" />
      <test01 v-model="sharedMessage" />
      <h2>這是共享訊息!</h2>
      <p>這邊放了ref的內容：{{ sharedMessage }}</p>
      <Tiktok />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import test01 from "./components/test01.vue";
import Tiktok from "./components/Tiktok.vue";

// 定義一個 ref 變數來存儲共享訊息
const sharedMessage = ref("");
</script>
