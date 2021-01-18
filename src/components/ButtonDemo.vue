<template>
  <Button @click="onClick" @focus="onClick" @mouseenter="onClick">hi</Button>
</template>

<script lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue';

export default {
  components: {
    Button
  },
  setup () {
    const onClick = () => {
      console.log(123);
    }
    return { onClick }
  }
}
</script>

<style lang="scss">

</style>