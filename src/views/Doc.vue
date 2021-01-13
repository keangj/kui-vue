<template>
  <div>
    <Topnav/>
    <div class="content">
      <aside v-if="menuVisible">
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
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    console.log(menuVisible.value);
    return { menuVisible }
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
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style>
