import { createRouter, createWebHashHistory }  from 'vue-router';

import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Markdown from './views/Markdown.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import { h } from "vue";

/**
 * @param fileName
 * @description 只支持 src/markdown 下的的 .md 文件
 */
const markdown = fileName => {
  return h(Markdown, { fileName, key: fileName })
}
const routes = [
  { path: '/', component: Home },
  {
    path: '/doc',
    component: Doc,
    children: [
      { path: 'intro', component: markdown('intro') },
      { path: 'started', component: markdown('get-started') },
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
  