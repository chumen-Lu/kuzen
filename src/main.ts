import './assets/main.css'
// 取消全局ant-design引入,使用按需引入
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/reset.css'

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes
})

// vuerouter自动引入
app.use(router)
app.mount('#app')
