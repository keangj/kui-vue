import { createRouter, createWebHashHistory }  from 'vue-router'

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import HelloWorld from './views/HelloWorld.vue'

const routes = [
  { path: '/', component: Home },
  { 
    path: '/doc', component: Doc,
    children: [{
      path: 'switch', component: HelloWorld,
    }]
  },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
  