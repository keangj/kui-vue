<template>
  <article class="markdown-body" v-html="content"/>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "Markdown",
  props: {
    fileName: {
      type: String,
      required: true
    }
  },
  setup(props: { path: string; }) {
    const content = ref<string>('')
    const path = `../markdown/${props.fileName}.md`
    const modules = import.meta.glob(`../markdown/*.md`)
    modules[path] && modules[path]().then(resource => {
      content.value = resource.default
    })
    return { content }
  }
}
</script>

<style scoped>

</style>