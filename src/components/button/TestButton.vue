<template>
  <button :class="classes" :type="nativeType">
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
// import { computed } from 'vue'

// 声明条件
type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'warning'
type ButtonNaTiveType = 'button' | 'submit' | 'reset'
type Buttonsize = 'lg' | 'sm'

// 创建接口
interface ButtonProps {
  type?: ButtonType
  nativeType?: ButtonNaTiveType
  size?: Buttonsize
  //   nativeButton?: string
}
// 传递button数据
const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'submit'
})
// 定义默认属性
const classes = computed(() => {
  return ['ant-btn', `ant-btn-${props.size}`, `ant-btn-${props.type}`]
})
</script>

<style lang="scss">
// @import 'ant-design-vue/dist/reset.css';
</style>
