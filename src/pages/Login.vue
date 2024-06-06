<template>
  <div>登陆界面</div>
  <a-button @click="store.increment">{{ store.count }}*2={{ store.doubleCount }}</a-button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
const store = useCounterStore()
</script>

<style scoped></style>
