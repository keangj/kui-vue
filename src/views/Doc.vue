<template>
  <div>
    <Topnav/>
    <div class="content">
      <aside>
        <h2>组件列表</h2>
        <ol>
          <li>
            <routerLink to="/doc/switch">switch</routerLink>
          </li>
          <li>
            <routerLink to="/doc/button">button</routerLink>
          </li>
          <li>
            <routerLink to="/doc/dialog">dialog</routerLink>
          </li>
        </ol>
      </aside>
      <main>
        
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import Topnav from '../components/Topnav.vue';
export default {
  name: 'about',
  components: {
    Topnav
  },
  setup () {
    const menuVisible = inject<Ref<boolean>>('xxx');
    console.log(menuVisible.value);
  },
  data() {
    return {
      msg: 'about'
    }
  }
}
</script>

<style lang="scss">
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>
