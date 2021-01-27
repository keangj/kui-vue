<template>
  <div v-if="visible">
    <teleport to='body'>
      <div class="quick-dialog-mask" @click="onClickMask"></div>
      <div class="quick-dialog-wrapper">
        <div class="quick-dialog">
          <header>
            <slot name="title"/>
            <span @click="close" class="quick-dialog-close"></span>
          </header>
          <main>
            <slot name="content"></slot>
          </main>
          <footer>
            <Button @click="confirm">yes</Button>
            <Button @click="cancel">no</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import Button from './Button.vue';
export default {
  components: {
    Button
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Function
    },
    cancel: {
      type: Function
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '提示'
    }
  },
  setup (props, context) {
    const close = () => {
      context.emit('update:visible', false);
    }
    const onClickMask = () => {
      props.maskClosable && close()
    }
    const confirm = () => {
      console.log(props);
      
      if (props.confirm?.() !== false) {
        close()
      }
    }
    const cancel = () => {
      close()
    }
    return { close, confirm, cancel, onClickMask }
  }
}
</script>

<style lang="scss">
  $radius: 4px;
  $border-color: #d9d9d9;
  .quick-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;
    &-mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: fade_out(black, 0.5);
      z-index: 10;
    }
    &-wrapper {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 11;
    }
    >header {
      padding: 12px 16px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
    }
    >main {
      padding: 12px 16px;
    }
    >footer {
      border-top: 1px solid $border-color;
      padding: 12px 16px;
      text-align: right;
    }
    &-close {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;
      &::before,
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        background: black;
        width: 100%;
        top: 50%;
        left: 50%;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
</style>