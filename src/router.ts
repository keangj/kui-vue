import { createRouter, createWebHashHistory }  from 'vue-router'

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/doc', component: Doc },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
  