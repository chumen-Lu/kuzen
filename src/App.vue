<template>
  <Bililayout>
    <BiliHeader :style="{ background: '#000', height: '100px', color: '#fff' }"
      ><h1>header</h1></BiliHeader
    >
    <Bililayout>
      <BiliSlider class="left-sider" :style="{ background: '#000', color: '#fff' }"
        >sider</BiliSlider
      >
      <BiliConter class="content">content</BiliConter>
      <BiliSlider class="right-sider" :style="{ background: '#000', color: '#fff' }"
        >sider
        </BiliSlider
      >
    </Bililayout>

    <BiliFooter>footer</BiliFooter>
  </Bililayout>
</template>

<script setup lang="ts">
import Bililayout from '@/components/layout/Layout.vue'
import BiliHeader from '@/components/layout/Header.vue'
import BiliFooter from '@/components/layout/Footer.vue'
import BiliConter from '@/components/layout/Content.vue'
import BiliSlider from '@/components/layout/Sider.vue'
</script>

<style scss>
.ant-layout {
  display: flex;
  flex-direction: column;
  height: 100px;
}

.ant-layout-has-sider {
  flex-direction: row;
}

.content {
  flex-grow: 1;
  margin: 0 20px; /* 你可以根据需要调整左右边距 */
}
</style>
