<template>
  <section class="sec_project">
    <h3 class="tit_subject">Project List</h3>
    <ul class="list_project">
      <li v-for="(project, index) in projects" :key="`project${index}`">
          <div class="wrap_thumb">
            <a :href="project.link" target="_blank">
              <img
                v-lazy-image
                src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
                :data-src="project.url"
                alt=""
              >
            </a>
          </div>
          <div class="wrap_cont">
            <strong class="tit_project">
              <a :href="project.link" target="_blank">
                {{project.name}}
              </a>
            </strong>
            <p class="desc_project" v-html="project.desc"></p>
          </div>
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
            desc: '<a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>로 구현한 프로젝트로 SEO를 고려하며 작업됐습니다. 카카오 AI의 기술, 제품, 파트너 소개가 핵심인 페이지로 각종 인터렉션들이 작업되어 있습니다.',
            link: 'https://kakao.ai/',
            url: 'http://t1.kakaocdn.net/kakaoi_brand/images/meta_image.jpg'
          },
          {
            name: 'Kakao AI 브랜드 사이트',
            desc: '<a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>로 구현한 프로젝트로 SEO를 고려하며 작업됐습니다. 카카오 AI의 기술, 제품, 파트너 소개가 핵심인 페이지로 각종 인터렉션들이 작업되어 있습니다.',
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
  position: relative;
  padding-top: 30px;
  margin-top: 20px;
  min-height: calc(100vh - 208px);
  box-sizing: border-box;
  &::before {
    position: absolute;
    left: 128px;
    top: 0;
    width: 6px;
    height: 100%;
    background: #f2f2f2;
    content: '';
  }
  li {
    overflow: hidden;
    padding-bottom: 200px;
  }
  .wrap_thumb {
    float: left;
    width: 220px;
    height: 220px;
    border: 22px solid #f2f2f2;
    border-radius: 50%;
    &:hover {
      a {
        transform: scale(1.2);
      }
    }
    a {
      position: relative;
      display: block;
      height: 100%;
      transition: transform .3s ease-in;
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .wrap_cont {
    overflow: hidden;
    padding: 0 100px;
    .tit_project a{
      font-size: 22px;
      color: rgba(0,0,0,.88);
    }
    .desc_project {
      max-width: 400px;
      padding-top: 10px;
      font-size: 16px;
      /deep/ a {
        color: #1565c0;
      }
    }
  }
}
</style>
