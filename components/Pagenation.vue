<template>
  <div class="pager">
    <ul class="pager__list">
      <li
        v-if="current > 1"
        class="pager__item arrow">
        <nuxt-link :to="getPagePath(current - 1)">
          <img src="@/assets/images/icon-arrow-left.svg" alt="前のページ">
        </nuxt-link>
      </li>
      <li
        v-if="3 < current"
        class="pager__num">
        <nuxt-link :to="getPagePath(1)">
          1
        </nuxt-link>
      </li>
      <li
        v-if="4 < current"
        class="pager__ommision">
        ...
      </li>
      <li
        v-for="p in pager"
        v-show="current - 3 <= p && p <= current + 1"
        :key="p"
        class="pager__num"
        :class="{ active: current === p + 1 }">
        <nuxt-link :to="getPagePath(p + 1)">
          {{ p + 1 }}
        </nuxt-link>
      </li>
      <li
        v-if="current + 3 < pager.length"
        class="pager__ommision">
        ...
      </li>
      <li
        v-if="current + 2 < pager.length"
        class="pager__num">
        <nuxt-link :to="getPagePath(pager.length)">
          {{ pager.length }}
        </nuxt-link>
      </li>
      <li
        v-if="current < pager.length"
        class="pager__item arrow">
        <nuxt-link :to="getPagePath(current + 1)">
          <img src="@/assets/images/icon-arrow-right.svg" alt="次のページ">
        </nuxt-link>
      </li>
    </ul>
    <!-- <ul>
      <li
        v-for="(number, index) in pager"
        :key="index">
        <div @click="toPage(number)">
          <span>{{ number }}</span>
        </div>
      </li>
    </ul> -->
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
    getPagePath (p) {
      return `/page/${p}`
    }
  }
}
</script>

<style lang="scss" scoped>
.pager {
  padding: 16px 0;
  .pager__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 40px 0 0;
    .pager__item {
      &.arrow {
        width: 15px;
        height: 15px;
        margin: 4px 12px;
      }
      .pager__num {
        width: 40px;
        height: 40px;
        border-radius: 5px;
        margin: 4px;
        &.active {
          background-color: var(--color-blue);
          a,
          a:hover {
            color: #fff;
          }
        }
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          color: #000;
          &:hover {
            color: #333;
          }
        }
      }
      .pager__omission {
        color: #000;
        margin: 4px 12px;
      }
    }
  }
}
</style>
