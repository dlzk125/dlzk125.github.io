<template>
  <section class="sec_blog">
    <h2 class="screen_out">블로그 본문</h2>
    <Container v-for="(cont ,index) in blogData" :data="blogData" :key="`contItem${index}`"/>
  </section>
</template>

<script>
import Container from '@/components/blog/Container';
import dirTree from 'directory-tree';
  export default {
    components: {
      Container
    },
    asyncData({store, app, route, redirect}) {
      const tree = dirTree('/', { extensions: /\.json/ });
      console.log(tree, dirTree);
      const {params: {detail}} = route;
      app.$axios.get(`/blog/${detail}.json`).then((res) => {
        store.dispatch('setIsDetail', {isDetail: true});
        return {blogData: res};
      }).catch((err) => {
        console.log(err);
        redirect('/');
      })
    },
    data() {
      return {
        blogList: [
          'blog1'
        ],
        blogData: []
      }
    },
    mounted () {
      this.$store.dispatch('setIsDetail', {isDetail: true});
    },
  }
</script>

<style lang="scss" scoped>

</style>
