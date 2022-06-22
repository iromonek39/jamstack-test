<template>
  <div class="blog">
    {{  }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'Blog',
  mixins: [linkTo],
  data () {
    return {
    }
  },
  async fetch ({ store }) {
    await console.log(store)
    await store.dispatch('api/getApi')
  },
  computed: {
    ...mapState('api', ['apiData'])
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
