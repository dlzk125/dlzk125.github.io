<template>
  <section class="sec_blog">
    <h3 class="screen_out">블로그 본문</h3>
    <div class="cont_item" v-for="(hash, contInfo ,index) in selectedBlogInfo" :key="`contItem${index}`">
      <!-- <component v-for="(key, value, idx) in contInfo" :key="`compItem${idx}`" :is="Title" :data="value"></component> -->
    </div>
  </section>
</template>

<script>
import Title from '@/components/blog/Title';
import Desc from '@/components/blog/Desc';
import Image from '@/components/blog/Image';
  export default {
    components: {
      Title, Desc, Image
    },
    asyncData({route}) {
      const {} = route;
    },
    computed: {
      selectedBlogInfo() {
        const {name} = this.$route;
        return this[name];
      }
    },
    data() {
      return {
        blogList: [
          'blog1'
        ],
        blog1: {
          Title: '테스트입니다.',
          Desc: '테스트 디스크립션',
          Image: {
            src: '',
            alt: 'hi',
          },
        }
      }
    },
    mounted () {
      this.$store.dispatch('setIsDetail', {isDetail: true});
    },
  }
</script>

<style lang="scss" scoped>

</style>
