<template>
  <div>?????</div>
  <div>
    <!-- <a-button @click="store.increment">{{ store.count }}*2={{ store.doubleCount }}</a-button> -->
    <a-button @click="store.increment">{{ store.count }}*2={{ store.doubleCount }}</a-button>
  </div>
  <ul>
    <li><RouterLink to="/login">登陆</RouterLink></li>
    <li><RouterLink to="/About">关于</RouterLink></li>
    <li><RouterLink to="/login">登陆</RouterLink></li>
    <li><RouterLink to="/Home">家</RouterLink></li>
  </ul>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
const store = useCounterStore()
</script>

<style lang="scss"></style>
