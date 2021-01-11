<template>
    <div class="topnav">
      <div class="logo">LOGO</div>
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
        const menuVisible = inject<Ref<boolean>>('xxx');
        console.log(menuVisible.value);
    }
}
</script>

<style lang="scss">
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
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
}
</style>