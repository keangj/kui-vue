import { createRouter, createWebHashHistory }  from 'vue-router'

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'

const routes = [
  { path: '/', component: Home },
  { 
    path: '/doc', 
    component: Doc,
    children: [
      { path: 'switch', component: SwitchDemo }
    ]
  },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
  