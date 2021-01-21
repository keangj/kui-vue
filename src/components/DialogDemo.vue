<template>
  <Dialog/>
</template>

<script lang="ts">
import { ref } from 'vue';
import Dialog from '../lib/Dialog.vue';

export default {
  components: {
    Dialog
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