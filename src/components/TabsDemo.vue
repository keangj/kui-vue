<template>
  <Tabs>
    <Tab title="haha">hi</Tab>
    <Tab title="hehe">hello</Tab>
  </Tabs>
</template>

<script lang="ts">
import { ref } from 'vue';
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue'

export default {
  components: {
    Tabs,
    Tab
  },
  setup () {

  }
}
</script>

<style lang="scss">

</style>