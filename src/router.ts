import { createRouter, createWebHashHistory }  from 'vue-router';

import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import GetStarted from './views/GetStarted.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';

const routes = [
  { path: '/', component: Home },
  {
    path: '/doc', 
    component: Doc,
    children: [
      { path: 'started', component: GetStarted },
      { path: 'switch', component: SwitchDemo },
      { path: 'button', component: ButtonDemo },
      { path: 'dialog', component: DialogDemo },
      { path: 'tabs', component: TabsDemo },
    ]
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
  