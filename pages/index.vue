<template>
  <div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('setIsDetail', {isDetail: false});
  },
}
</script>

<style>
</style>
