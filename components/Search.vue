<template>
  <div class="search-box">
    <input
      v-model="searchText"
      class="search-input"
      type="text"
      placeholder="Search"
      @keydown.enter="doSearch"
    >
    <button
      class="btn"
      @click="doSearch">
      Search
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'Search',
  mixins: [linkTo],
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    ...mapActions('api', ['getApi']),
    doSearch (event) {
      console.log(event)
      if (event.type === 'keydown') {
        if (event.keyCode !== 13) return
      }

      if (this.searchText === '') {
        this.$emit('searchResults', [])
        this.getApi()
      } else {
        this.$axios.get(`http://localhost/wp-test/nuxt2/wp-json/wp/api/search/${this.searchText}`)
          .then((res) => {
            console.log(res)
            this.$emit('searchResults', res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  text-align: center;
  margin-bottom: 32px;

  .search-input {
    min-width: 274px;
    padding: 8px;
  }
}
.btn {
  padding: 8px;
}
</style>
