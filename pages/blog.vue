<template>
  <div>

  </div>
</template>

<script>
  export default {
    mounted () {
      this.$store.dispatch('setIsDetail', {isDetail: true});
    },
  }
</script>

<style lang="scss" scoped>

</style>
