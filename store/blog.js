export const state = () => ({
  blogData: {},
  blogDetailData: {}
})

export const mutations = {
  setBlogData (state, payload) {
    state.blogData = payload
  },
  setBlogDetailData (state, payload) {
    state.blogDetailData = payload
  }
}

export const actions = {
  updateBlogDetailData (vuexContext, obj) {
    vuexContext.commit('setBlogDetailData', obj)
  }
}
