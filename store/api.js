export const state = () => ({
  apiData: {},
  singleData: {},
  cmsDataBlogs: {},
  shopList: {},
  sliderList: {},
  newsList: {},
  newsDetail: {},
  faq: {}
})

export const mutations = {
  setApi (state, payload) {
    state.apiData = payload
  },
  setSingleDate (state, payload) {
    state.singleData = payload
  },
  setCmsDataBlogs (state, payload) {
    state.cmsDataBlogs = payload
  },
  setShop (state, payload) {
    state.shopList = payload
  },
  setSlider (state, payload) {
    state.sliderList = payload
  },
  setNews (state, payload) {
    state.newsList = payload
  },
  setNewsDetail (state, payload) {
    state.newsDetail = payload
  },
  setFaq (state, payload) {
    state.faq = payload
  }
}

export const actions = {
  async getApi ({ commit }) {
    // const { data } = await this.$axios.get('http://localhost/wp-test/nuxt2/wp-json/wp/api/post') // mac
    const { data } = await this.$axios.get('http://192.168.33.10/wp-json/wp/api/post') // windows
    commit('setApi', data)
    // this.$axios.get('http://localhost/wp-test/nuxt2/wp-json/wp/api/post')
    //   .then(res => {
    //     commit('setApi', res.data)
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  },
  getSingleData ({ commit }, featuredId) {
    this.$axios.get(`http://localhost/wp-test/nuxt2/wp-json/wp/api/blog/${featuredId}`)
      .then(res => {
        commit('setSingleDate', res.data)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  doSearch ({ commit }, searchWord) {
    this.$axios.get(`http://localhost/wp-test/nuxt2/wp-json/wp/api/search/${searchWord}`)
    // http://localhost/wp-test/nuxt2/wp-json/acf/v3/shop_list
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getShopList ({ commit }) {
    this.$axios.get('http://localhost/wp-test/nuxt2/wp-json/acf/v3/shop_list')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getSliderList ({ commit }) {
    this.$axios.get('http://localhost/wp-test/nuxt2/wp-json/acf/v3/slider')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  async getNewsList ({ commit }) {
    const { data } = await this.$axios.get('http://localhost/wp-test/nuxt2/wp-json/acf/v3/news')
    commit('setNews', data)
  },
  updateNewsItem ({ commit }, obj) {
    commit('setNewsDetail', obj)
  },
  async getFaq ({ commit }) {
    const { data } = await this.$axios.get('http://192.168.33.10/wp-json/acf/v3/faq')
    data.forEach(item => {
      item.acf.openFlg = false
    })
    commit('setFaq', data)
  }
}
