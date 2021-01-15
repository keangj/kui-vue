<template>
  <Switch :value="switchValue" @update:value="switchValue = $event"/>
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from '../lib/Switch.vue';

export default {
  components: {
    Switch
  },
  setup () {
    const switchValue = ref(false);
    return { switchValue }
  }
}
</script>

<style lang="scss">

</style>