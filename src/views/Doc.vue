<template>
  <div class="layout">
    <Topnav class="nav"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <routerLink to="/doc/intro">intro</routerLink>
          </li>
          <li>
            <routerLink to="/doc/started">started</routerLink>
          </li>
          <li>
            <routerLink to="/doc/switch">switch</routerLink>
          </li>
          <li>
            <routerLink to="/doc/button">button</routerLink>
          </li>
          <li>
            <routerLink to="/doc/dialog">dialog</routerLink>
          </li>
          <li>
            <routerLink to="/doc/tabs">tabs</routerLink>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
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
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    // background: lightgreen;
  }
}
aside {
  background: lightblue;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
    padding: 4px 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
        &:hover {
          background-color: #6dd0f1;
          color: #fff;
        }
      }
      .router-link-active {
        background-color: #fff;
      }
    }
  }
  main {
     overflow: auto;
  }
}
</style>
