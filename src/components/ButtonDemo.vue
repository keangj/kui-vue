<template>
  <Button @click="onClick" @focus="onClick" @mouseenter="onClick">hi</Button>
  <Button @click="onClick" @focus="onClick" @mouseenter="onClick" theme="text">hi</Button>
  <Button @click="onClick" @focus="onClick" @mouseenter="onClick" theme="link">hi</Button>
  <Button @click="onClick" @focus="onClick" @mouseenter="onClick" theme="link" size="big">hi</Button>
  <Button @click="onClick" @focus="onClick" @mouseenter="onClick" size="small">hi</Button>
  <Button @click="onClick" @focus="onClick" @mouseenter="onClick" size="normal">hi</Button>
  <Button @click="onClick" @focus="onClick" @mouseenter="onClick" size="big">hi</Button>
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