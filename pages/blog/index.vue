<template>
  <div>

  </div>
</template>

<script>
  export default {
    asyncData({store}) {
      store.dispatch('setIsDetail', {isDetail: true});
    },
  }
</script>

<style lang="scss" scoped>

</style>
