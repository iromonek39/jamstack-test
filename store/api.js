export const state = () => ({
  apiData: {},
  singleData: {},
  cmsDataBlogs: {}
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
  }
}

export const actions = {
  getApi (vuexContext) {
    this.$axios.get('http://localhost/wp-test/nuxt2/wp-json/wp/api/post')
      .then((res) => {
        vuexContext.commit('setApi', res.data)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getSingleData (vuexContext, featuredId) {
    this.$axios.get(`http://localhost/wp-test/nuxt2/wp-json/wp/api/blog/${featuredId}`)
      .then((res) => {
        vuexContext.commit('setSingleDate', res.data)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  doSearch (vuexContext, searchWord) {
    this.$axios.get(`http://localhost/wp-test/nuxt2/wp-json/wp/api/search/${searchWord}`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
