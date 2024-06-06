<template>
  <div><h1>我是根组件</h1></div>
  <br />
  <div>
    <a-button @click="store.increment">{{ store.count }}*2={{ store.doubleCount }}</a-button>
  </div>
  <br />
  <div class="router">
    <RouterLink to="/login">登陆</RouterLink>| <RouterLink to="/About">关于</RouterLink>|
    <RouterLink to="/login">登陆</RouterLink>| <RouterLink to="/Home">家</RouterLink>
  </div>
  <br />
  <a-button type="primary" size="large"><FolderAddFilled />按钮</a-button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
import { FolderAddFilled } from '@ant-design/icons-vue'
const store = useCounterStore()
</script>

<style lang="scss"></style>
