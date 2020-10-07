<template>
  <p class="desc_item" v-html="data"></p>
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
