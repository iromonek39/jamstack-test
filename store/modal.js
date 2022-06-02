export const state = () => ({
  isVisibleModal: false
})

export const mutations = {
  setIsVisibleModal (state, payload) {
    state.isVisibleModal = payload
  }
}

export const actions = {
  updateIsVisibleModal (vuexContext, bool) {
    vuexContext.commit('setIsVisibleModal', bool)
  }
}
