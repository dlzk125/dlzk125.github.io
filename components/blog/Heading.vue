<template>
  <component :is="data.tag || 'h3'">{{data.subject}}</component>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
