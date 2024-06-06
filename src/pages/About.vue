<template>
  关于页面

  <div>{{ store.count }}</div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
const store = useCounterStore()
</script>
<style></style>
