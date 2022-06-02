<template>
  <div class="blog">
    <Search
      @searchResults="getSearchResults"/>
    <ul class="blog__list">
      <li
        v-for="(item, index) in blogData"
        :key="index"
        class="blog__item">
        <img
          v-if="item.thumbnail"
          :src="item.thumbnail"
          :alt="item.title"
          class="blog__img">
        <img
          v-else
          src="@/assets/images/kintere.jpeg">
        <h2
          class="blog__title">
          {{ item.title }}
        </h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <!-- <p
          v-html="item.content"
          class="blog__text"
        />
        <time class="blog__time">
          {{ item.date }}
        </time> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Blog',
  data () {
    return {
      searchData: []
    }
  },
  computed: {
    ...mapState('api', ['apiData', 'singleData']),
    blogData: {
      get () {
        if (this.searchData.length === 0) {
          return this.apiData
        } else {
          return this.searchData
        }
      },
      set (val) {
        this.searchData = val
      }
    }
  },
  mounted () {
    this.getApi()
    this.getSingleData(2113)
  },
  methods: {
    ...mapActions('api', ['getApi', 'getSingleData']),
    getSearchResults (res) {
      this.blogData = res
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
  width: 100%;
  background: #f5f5f5;
  padding: 24px 0;
  .blog__list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    list-style: none;
    padding-left: 0;
  }
}
.blog__item {
  width: calc(100% / 3 - (24px * 4));
  background: #fff;
  padding: 24px;
}
.blog__title {
  font-size: 14px;
  color: #202121;
  white-space: pre-wrap;
}
img {
  width: 100%;
  height: auto;
  vertical-align: bottom;
}
</style>
