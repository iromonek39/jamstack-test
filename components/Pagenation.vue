<template>
  <div class="pager">
    <ul class="pager__list">
      <li class="pager__item">
        <!-- <nuxt-link :to="getPath(current - 1)"> -->
          <img src="@/assets/images/icon-arrow-left.svg" alt="前のページ">
        <!-- </nuxt-link> -->
      </li>
      <li class="pager__num">
        1
      </li>
      <li class="pager__ommision">
        ...
      </li>
      <li class="pager__num">
        5
      </li>
      <li class="pager__num">
        6
      </li>
      <li class="pager__ommision">
        ...
      </li>
      <li class="pager__num">
        10
      </li>
      <li class="pager__item">
        <!-- <nuxt-link :to="getPath(current - 1)"> -->
          <img src="@/assets/images/icon-arrow-right.svg" alt="次のページ">
        <!-- </nuxt-link> -->
      </li>
    </ul>
    <ul>
      <li
        v-for="(number, index) in pager"
        :key="index">
        <div @click="toPage(number)">
          <span>{{ number }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'Pagenation',
  mixins: [linkTo],
  props: {
    pager: {
      type: Array,
      required: false,
      default: () => []
    },
    current: {
      type: Number,
      required: true
    }
    // category: {
    //   type: Object,
    //   required: false,
    //   default: undefined
    // }

    // totalCount: {
    //   type: Number,
    //   default: 0
    // },
    // perPage: {
    //   type: Number,
    //   default: 0
    // }
  },
  data () {
    return {
    }
  },
  computed: {
    // pager () {
    //   return this.range(1, Math.ceil(this.totalCount / this.perPage))
    // }
  },
  methods: {
    // range (start, end) {
    //   return [...Array(end - start + 1)].map((_, i) => start + i)
    // },
    // toPage (pageNum) {
    //   this.$router.push(`/blog/${pageNum}`)
    // },
    getPath (p) {
      return `/page/${p}`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
