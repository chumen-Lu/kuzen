<template>
  home
  <a-button @click="store.increment">{{ store.count }}</a-button>
  <a-button @click="result">dianjiyi
    
  </a-button>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
const store = useCounterStore()
let result = window.confirm('Are you sure?');
if (result) {
    // 用户点击了“确定”
} else {
    // 用户点击了“取消”
}
</script>
