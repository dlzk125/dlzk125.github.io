export default {
  ssr: false,
  loading: false,
  head: {
    htmlAttrs: {
      lang: 'ko',
    },
    title: "james's Page",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    { src: '@/assets/scss/common.scss', lang: 'scss' }
  ],
  styleResources: {
    scss: ['@/assets/scss/_config.scss']
  },
  modules: [
    ['@nuxtjs/axios', {proxy: true}],
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
  ],
  // polyfill: {
  //   features: [
  //     {require: 'element-scroll-polyfill'},
  //     {require: 'element-remove-polyfill'},
  //   ]
  // },
  plugins: [
    { src: '~/plugins/lazy-image.js', ssr: false },
    { src: '~/plugins/aos', ssr: false },
  ],
  // build: {
  //   extractCSS: { ignoreOrder: true },
  //   optimization: {
  //     splitChunks: {
  //       cacheGroups: {
  //         styles: {
  //           name: 'styles',
  //           test: /\.(scss|css|vue)$/,
  //           chunks: 'all',
  //           enforce: true
  //         }
  //       }
  //     },
  //   },
  // },
}
