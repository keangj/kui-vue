<template>
  <div class="quick-tabs">
    <div ref="container" class="quick-tabs-nav">
      <div 
        v-for="(item, index) in titles" :key="index"
        class="quick-tabs-nav-item" 
        :class="{active: activeKey === item.key}"
        @click="toggleTag(item.key)"
        :ref="el => { if (activeKey === item.key) activeItem = el }"
      >
      {{ item.title }}
      </div>
      <div ref="activeBar" class="quick-tabs-nav-active-bar"> </div>
    </div>
    <div class="quick-tabs-content">
      <component class="quick-tabs-content-item" :is="active"/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, watchEffect } from 'vue';
import Tab from './Tab.vue'
export default {
  components: {
  },
  props: {
    activeKey: {
      type: String,
      requert: true
    }
  },
  setup (props, context) {
    const activeItem = ref<HTMLDivElement>(null);
    const activeBar = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 的子组件必须是 Tab.');
      }
    });
    const active = computed(() => {
      return defaults.filter(tag => {
        return tag.props.key === props.activeKey
      })[0]
    })
    const titles = defaults.map(tag => {
      return {
        title: tag.props.title,
        key: tag.props.key
      };
    });
    const toggleTag = key => {
      context.emit('update:activeKey', key)
    }
    watchEffect(() => {
      const { left: containerLeft } = container.value.getBoundingClientRect();
      const { left: activeItemLeft, width } = activeItem.value.getBoundingClientRect();
      activeBar.value.style.width = `${width}px`;
      activeBar.value.style.left = `${activeItemLeft - containerLeft}px`;
    }, {
      flush: 'post'
    })
    return { titles, active, toggleTag, activeBar, container, activeItem };
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.quick-tabs {
  &-nav {
    position: relative;
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.active {
        color: $blue;
      }
    }
    &-active-bar {
      position: absolute;
      height: 2px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: width .3s,left .3s,right .3s;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>