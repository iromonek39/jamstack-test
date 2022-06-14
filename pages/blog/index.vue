<template>
  <div class="blog">
    <Search
      @searchResults="getSearchResults"/>
    <Category />
    <ul class="blog__list">
      <li
        v-for="(item, index) in blogData"
        :key="index"
        class="blog__item"
        @click="toBlogsDetail(item)">
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
        <span
          v-for="category in item.category"
          :key="'category-' + category.term_id">
          {{ category.name }}
        </span>
        <span
          v-for="tag in item.tag"
          :key="'tag-' + tag.term_id">
          {{ tag.name }}
        </span>
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
  async fetch ({ store }) {
    await store.dispatch('api/getApi')
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
  created () {
    // this.getApi()
    // this.getSingleData(2113)
  },
  methods: {
    // ...mapActions('api', ['getApi', 'getSingleData']),
    ...mapActions('blog', ['updateBlogDetailData']),
    getSearchResults (res) {
      this.blogData = res
    },
    toBlogsDetail (blogData) {
      console.log(blogData)
      this.updateBlogDetailData(blogData)
      this.$router.push(`/blog/${blogData.id}`)
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
