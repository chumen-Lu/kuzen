<template>
  home
  <a-button @click="store.increment">{{ store.count }}</a-button>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
const store = useCounterStore()


</script>
