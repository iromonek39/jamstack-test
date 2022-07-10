export const actions = {
  async nuxtServerInit ({ commit }) {
    const blogData = await this.$axios.$get('http://localhost:8080/wp-json/wp/api/post')
    commit('blog/setBlogData', blogData)
  }
}
