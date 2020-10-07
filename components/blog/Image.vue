<template>
  <div class="wrap_thumb">
    <img :src="data.src" :alt="data.alt">
  </div>
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
