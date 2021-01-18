<template>
  <button>
    <slot/>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  props: {
    value: Boolean
  },
  setup (props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    }
    return { toggle }
  }
}
</script>

<style lang="scss">
</style>