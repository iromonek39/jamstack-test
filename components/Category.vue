<template>
  <div class="category">
      カテゴリー
  </div>
</template>

<script>
import { mapState } from 'vuex'
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'Category',
  mixins: [linkTo],
  data () {
    return {
    }
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
