<template>
    <div class="topnav">
      <div class="logo">LOGO</div>
      <div class="toggle-aside" @click="toggleMenu"></div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    setup () {
      const menuVisible = inject<Ref<boolean>>('menuVisible');
      console.log(menuVisible.value);
      const toggleMenu = () => {
        menuVisible.value = !menuVisible.value;
      };
      return { toggleMenu }
    }
}
</script>

<style lang="scss">
.topnav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: pink;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggle-aside {
    display: none;
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background: chocolate;
  }
  @media (max-width: 500px) {
    > .logo {
      margin: 0 auto;
    }
    > .menu {
      display: none;
    }
    > .toggle-aside {
      display: inline-block;
    }
  }
}
</style>