<template>
  <section class="sec_project">
    <h3 class="tit_subject">진행한 프로젝트</h3>
    <ul class="list_project">
      <li v-for="(project, index) in projects" :key="`project${index}`">
        <a :href="project.link" target="_blank" class="link_item">
          <div class="wrap_thumb">
            <img
              v-lazy-image
              src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
              :data-src="project.url"
              alt=""
            >
          </div>
          <div class="wrap_cont">
            <strong class="tit_project">{{project.name}}</strong>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    mounted () {
      this.$store.dispatch('setIsDetail', {isDetail: true});
    },
    data() {
      return {
        projects: [
          {
            name: 'Kakao AI 브랜드 사이트',
            link: 'https://kakao.ai/',
            url: 'http://t1.kakaocdn.net/kakaoi_brand/images/meta_image.jpg'
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
.tit_subject {
  font-size: 30px;
}
.list_project {
  display: grid;
  margin-top: 30px;
  padding-top: 50px;
  border-top: 2px solid #919191;
  grid-template-rows: repeat(auto-fill, minmax(100px, auto));
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5%;
  .wrap_thumb {
    position: relative;
    padding-top: 100%;
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 1px solid rgba(0,0,0,.05);
      box-sizing: border-box;
      content: '';
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
    }
  }
  .wrap_cont {
    padding: 20px;
    border: 1px solid rgba(0,0,0,.05);
    border-top: 0 none;
    .tit_project {
      display: block;
      font-size: 16px;
    }
  }
}
</style>
