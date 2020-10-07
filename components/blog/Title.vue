<template>
  <strong class="tit_item" v-html="data"></strong>
</template>

<script>
  export default {
    props: {
      data: {
        type: String,
        default: ''
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
