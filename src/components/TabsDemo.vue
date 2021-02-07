<template>
  <Tabs v-model:activeKey="selected">
    <Tab title="haha" key="h1">hi</Tab>
    <Tab title="hehe" key="h2">hello</Tab>
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
    const selected = ref('h1');
    return { selected }
  }
}
</script>

<style lang="scss">

</style>