<template>
  <div>
    <p v-for="line in strHtml" :key="line.id" :style="line.style">
      {{ line.text }}
    </p>
    <input
      type="text"
      :value="modelValue"
      @input="updateValue($event)"
      placeholder="請輸入"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const strHtml = ref([
  { id: 1, text: "我是一號", style: "color: blue" },
  { id: 2, text: "我是二號", style: "color: blue" },
]);

import { defineProps, defineEmits } from "vue";

//導入共用的方法
const props = defineProps({ modelValue: String });
const emit = defineEmits(["update:modelValue"]);
// 更新父組件的 modelValue
const updateValue = (event) => {
  emit("update:modelValue", event.target.value); // 通知父組件更新數據
};
</script>
