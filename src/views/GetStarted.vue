<template>
  <article class="markdown-body" v-html="getStarted"/>
</template>

<script>
import getStarted from '../markdown/get-started.md';

export default {
  name: "GetStarted",
  data() {
    return {
      getStarted
    }
  }
}
</script>

<style scoped>

</style>