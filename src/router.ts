import { createMemoryHistory, createRouter } from 'vue-router'
import About from './pages/About.vue'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import love from './pages/love.vue'

const routes = [
  { path: '/', component: Home },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: 'lover',
        Components: love
      }
    ]
  },
  { path: '/Login', component: Login }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
