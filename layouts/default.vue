<template>
  <div class="container-doc">
    <div class="direct-link">
      <a href="#mainContent" v-if="isDetail">본문 바로가기</a>
      <a href="#gnbContent">메뉴 바로가기</a>
    </div>
    <header class="doc-header" ref="header">
      <div class="info_prof">
        <h1 class="tit_prof">
          <nuxt-link to="/">
            <svg class="ico_prof" width="80px" height="80px" viewBox="0 0 80 80" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <defs>
                <mask id="prfMask">
                  <g width="80" height="80" fill="white" stroke="#fff" stroke-width="2">
                    <use href="#polygon"/>
                  </g>
                </mask>
                <path id="polygon" d="M46.2625,78.1822624 L70.975,63.6794527 C72.625,62.6891441 73.875,61.5620165 74.725,60.2980699 C75.575,59.0341233 76,57.0860819 76,54.4539458 L76,25.2528708 C76,22.7249776 75.58125,20.8551185 74.74375,19.6432934 C73.90625,18.4314684 72.7125,17.3564623 71.1625,16.4182751 L46.525,1.91546543 C44.35,0.638488476 42.18125,0 40.01875,0 C37.85625,0 35.675,0.638488476 33.475,1.91546543 L8.8375,16.4182751 C7.2875,17.3564623 6.09375,18.4314684 5.25625,19.6432934 C4.41875,20.8551185 4,22.7249776 4,25.2528708 L4,54.4539458 C4,57.0860819 4.425,59.0341233 5.275,60.2980699 C6.125,61.5620165 7.3875,62.6891441 9.0625,63.6794527 L33.775,78.1822624 C37.95,80.6059125 42.1125,80.6059125 46.2625,78.1822624 Z"></path>
              </defs>
              <title>james.bin</title>
              <image xlink:href="/img_prof.jpeg" x="0" y="0" height="80px" width="80px" mask="url(#prfMask)"/>
              <use href="#polygon" stroke="#fff" stroke-width="2"/>
            </svg>
          </nuxt-link>
        </h1>
        <p class="desc_info">james.bin / dk techin / 프런트엔드<br><br>안녕하세요. 제주에서 dk techin 프런트엔드 개발자로 일하고 있는 james.bin입니다.</p>
        <nav class="doc-gnb" id="gnbContent">
          <h2 class="screen_out">메뉴</h2>
          <ul class="list_gnb">
            <li v-for="(GNBInfo, index) in GNBInfos" :key="`gnbItem${index}`">
              <component
                :is="GNBInfo.target ? 'a' : 'nuxt-link'"
                v-bind="{
                  href: GNBInfo.target && GNBInfo.link ? GNBInfo.link : null,
                  to: !GNBInfo.target && GNBInfo.link ? GNBInfo.link : null
                }"
              >
                <component :is="GNBInfo.ico"></component>
                {{GNBInfo.name}}
              </component>
            </li>
          </ul>
        </nav>
        <dl class="list_share">
          <dt>Share</dt>
          <dd v-for="(share, index) in shares" :key="`share${index}`">
            <button type="button" class="btn_share" v-on="share.events">
              <component :is="share.ico"></component>
            </button>
          </dd>
        </dl>
      </div>
    </header>
    <main class="doc-main">
      <article id="mainContent" class="content-article">
        <h2 class="screen_out" v-if="isDetail">tech Ground 본문</h2>
        <Nuxt/>
      </article>
    </main>
    <footer class="doc-footer">
      <strong class="screen_out">제작</strong>
      <small>Powered by dlzk125</small>
    </footer>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import IcoPage from '@/assets/svg/ico_page.svg?inline';
import IcoBlog from '@/assets/svg/ico_blog.svg?inline';
import IcoKakaotalk from '@/assets/svg/ico_kakaotalk.svg?inline';
import IcoGithub from '@/assets/svg/ico_github.svg?inline';
import IcoFacebook from '@/assets/svg/ico_facebook.svg?inline';
import IcoTwitter from '@/assets/svg/ico_twitter.svg?inline';
  export default {
    components: {
      IcoPage, IcoBlog, IcoKakaotalk, IcoGithub, IcoFacebook, IcoTwitter
    },
    head() {
      return {
        bodyAttrs: {
          class: this.bodyClass
        },
      }
    },
    computed: {
      ...mapGetters([
        'bodyClass', 'isDetail'
      ]),
    },
    data() {
      return {
        GNBInfos: [
          {
            name: 'Github',
            link: 'https://github.com/dlzk125',
            target: '_blank',
            ico: 'IcoGithub',
          },
          {
            name: 'Blog',
            link: '/blog',
            ico: 'IcoBlog',
          },
          {
            name: 'Projects',
            link: '/projects',
            ico: 'IcoPage',
          }
        ],
        shares: [
          {
            ico: 'IcoKakaotalk',
            events: {
              click: 'shareKakaotalk',
            }
          },
          {
            ico: 'IcoTwitter',
            events: {
              click: 'shareTwitter',
            }
          },
          {
            ico: 'IcoFacebook',
            events: {
              click: 'shareFacebook',
            }
          },
        ]
      }
    },
    mounted () {
      this.$refs.header.addEventListener('transitionend', () => {

      })
    },
  }
</script>

<style lang="scss" scoped>
$minHeaderWidth: 440px;
.doc-header {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  max-width: 100%;
  color: #fff;
  background: no-repeat top left / cover url('/bg_jeju.jpeg');
  flex-direction: column;
  transition: max-width .4s ease-in;
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    content: '';
  }
  .info_prof {
    width: 400px;
    padding: 0 20px;
    margin: auto;
  }
  .tit_prof {
    float: left;
    margin-bottom: 30px;
  }
  .ico_prof {
    overflow: visible;
    width: 120px;
    height: 120px;
  }
  .desc_info {
    overflow: hidden;
    padding: 0 20px;
    font-size: 15px;
  }
}
.doc-gnb {
  padding-top: 20px;
  border-top: 2px solid #f2f2f2;
  clear: both;
  .list_gnb {
    display: flex;
    justify-content: space-around;
    li {
      display: inline-block;
      & + li {
        margin-left: 10px;
      }
    }
    a {
      display: inline-block;
      border: 2px solid #f2f2f2;
      padding: 8px 15px;
      border-radius: 20px;
      font-size: 15px;
      color: #f2f2f2;
      line-height: 20px;
      vertical-align: top;
      transition: all .3s ease-in;
      svg {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        fill: #f2f2f2;
        vertical-align: top;
        transition: fill .3s ease-in;
      }
      &:hover {
        border-color: #b1b1b1;
        color: #b1b1b1;
        svg {
          fill: #b1b1b1;
        }
      }
    }
  }
}
.list_share {
  overflow: hidden;
  padding: 20px;
  dt {
    float: left;
    margin-right: 5px;
    font-size: 20px;
    line-height: 32px;
  }
  dd {
    float: left;
    margin-left: 15px;
  }
  .btn_share {
    padding: 6px;
    border: 1px solid #f2f2f2;
    border-radius: 50%;
    font-size: 0;
    transition: all .3s ease-in;
    svg {
      width: 18px;
      height: 18px;
      fill: #f2f2f2;
      transition: fill .3s ease-in;
    }
    &:hover {
      border-color: #b1b1b1;
      svg {
        fill: #b1b1b1;
      }
    }
  }
}
.detail {
  .doc-header {
    max-width: $minHeaderWidth;
  }
}
.doc-main {
  margin-left: $minHeaderWidth;
  padding: 80px 40px 0;
}
</style>
