<template>
  <ul>
    <li
      v-for="(number, index) in pager"
      :key="index">
      <div @click="toPage(number)">
        <span>{{ number }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'Pagenation',
  mixins: [linkTo],
  props: {
    totalCount: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  computed: {
    pager () {
      return this.range(1, Math.ceil(this.totalCount / this.perPage))
    }
  },
  methods: {
    range (start, end) {
      return [...Array(end - start + 1)].map((_, i) => start + i)
    },
    toPage (pageNum) {
      this.$router.push(`/blog/${pageNum}`)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
