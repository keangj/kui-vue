import { createRouter, createWebHashHistory }  from 'vue-router';

import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';

const routes = [
  { path: '/', component: Home },
  {
    path: '/doc', 
    component: Doc,
    children: [
      { path: 'switch', component: SwitchDemo },
      { path: 'button', component: ButtonDemo },
      { path: 'dialog', component: DialogDemo },
    ]
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
  