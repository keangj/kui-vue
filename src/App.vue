<template>
  <router-view></router-view>
</template>

<script>
import { provide, ref } from 'vue'

export default {
  name: 'App',
  components: {
  },
  setup () {
    const screenWidth = document.documentElement.clientWidth
    const menuVisible = ref(screenWidth >= 500 ? true : false)
    provide('menuVisible', menuVisible)
    
  }
}
</script>
