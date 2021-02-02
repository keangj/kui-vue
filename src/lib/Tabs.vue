<template>
  <div v-for="(title, index) in titles" :key="index">{{ title }}</div>
  <component v-for="(component, index) in defaults" :is="component" :key="index"/>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import Tab from './Tab.vue'
export default {
  components: {
  },
  props: {

  },
  setup (props, context) {
    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 的子组件必须是 Tab.');
      }
    });
    const titles = defaults.map(tag => {
      console.log(tag.props.title); 
      return tag.props.title;
    });
    
    return { defaults, titles };
  }
}
</script>

<style lang="scss">

</style>