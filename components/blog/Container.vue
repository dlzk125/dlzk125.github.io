<template>
  <div class="cont_item">
    <component v-for="(value, name ,index) in data" :key="`contItem${index}`" :is="`${name}Block`" :data="value"></component>
  </div>
</template>

<script>
import TitleBlock from '@/components/blog/Title';
import DescBlock from '@/components/blog/Desc';
import ImageBlock from '@/components/blog/Image';
import ContainerBlock from '@/components/blog/Container';
  export default {
    name: 'ContainerBlock',
    components: {
      TitleBlock, DescBlock, ImageBlock, ContainerBlock
    },
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
