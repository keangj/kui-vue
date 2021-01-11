<template>
  <div>
    <Topnav/>
    <div class="content">
      <aside>边栏</aside>
      <main>content</main>
    </div>
  </div>
</template>

<script>
import Topnav from '../components/Topnav.vue';
export default {
  name: 'about',
  components: {
    Topnav
  },
  data() {
    return {
      msg: 'about'
    }
  }
}
</script>
