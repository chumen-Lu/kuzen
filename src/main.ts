import './assets/main.css'
// 取消全局ant-design引入,使用按需引入
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/reset.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// 取消全局ant-design引入,使用按需引入
// app.use(Antd)
app.use(router)
app.mount('#app')
