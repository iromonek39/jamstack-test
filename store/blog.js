export const state = () => ({
  blogDetailData: {}
})

export const mutations = {
  setBlogDetailData (state, payload) {
    state.blogDetailData = payload
  }
}

export const actions = {
  updateBlogDetailData (vuexContext, obj) {
    vuexContext.commit('setBlogDetailData', obj)
  }
}
