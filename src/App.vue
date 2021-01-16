<template>
  <router-view></router-view>
</template>

<script>
import { provide, ref } from 'vue'
import { router } from './router'

export default {
  name: 'App',
  components: {
  },
  setup () {
    const screenWidth = document.documentElement.clientWidth;
    const menuVisible = ref(screenWidth >= 500 ? true : false);
    provide('menuVisible', menuVisible)
    router.afterEach(() => {
      if (screenWidth <= 500) {
        menuVisible.value = false;
      }
    })
  }
}
</script>
