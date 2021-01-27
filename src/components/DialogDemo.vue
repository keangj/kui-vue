<template>
  <Dialog v-model:visible="visible" @confirm="onConfirm" @cancle="onCancel">
    <template v-slot:title>
      <div>
        xxx
      </div>
    </template>
    <template v-slot:content>hi</template>
  </Dialog>
  <Button @click="onClick">click</Button>
</template>

<script lang="ts">
import { ref } from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue'

export default {
  components: {
    Dialog,
    Button
  },
  setup () {
    const visible = ref(false);
    const onClick = () => {
      visible.value = !visible.value;
    };
    const onConfirm = () => {
      console.log(111);
      return false
    };
    const onCancel = () => {
      console.log(223);
    };
    return { onClick, visible, onConfirm, onCancel };
  }
}
</script>

<style lang="scss">

</style>