<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
export default {
  components: {
  },
  props: {
    title: {
      type: String,
    },
    key: {
      type: String
    }
  },
  setup (props, context) {

  }
}
</script>

<style lang="scss">

</style>