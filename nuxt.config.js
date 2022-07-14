import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jamstack-test',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#331cbf'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/default.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/swiper", mode: "client",
      src: "~/plugins/day", mode: "all"
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL
  },

  privateRuntimeConfig: {
    API_SECRET: process.env.API_SECRET
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  generate: {
    devtools: true,
    fallback: true,
    subFolders: true,
    // interval: 100,
    async routes () {
      const routesArr = []
      const limit = 10
      const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)
      const pages = await axios
        .get('http://localhost:8080/wp-json/wp/api/post')
        .then(res => {
          range(1, Math.ceil(res.data.total / limit)).map(p => {
            routesArr.push({
              route: `/post/page/${p}`,
              payload: p
            })
          })
          res.data.data.map(item => {
            routesArr.push({
              route: `/post/${item.id}`,
              payload: item
            })
          })
        })
      return routesArr
    }
  },

  router: {
    base: '/',
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/post/page/:p',
        component: resolve(__dirname, 'pages/post/index.vue'),
        name: 'page'
      })
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap']
  }
}
