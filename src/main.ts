import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { createRouter, createWebHashHistory }  from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/doc', component: Doc },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


const app = createApp(App)
app.use(router)
app.mount('#app')
