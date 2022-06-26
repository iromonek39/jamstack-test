<template>
  <div class="blog">
    <!-- <Search
      @searchResults="getSearchResults"/> -->
    <!-- <Category /> -->
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
    <ul class="blog__list">
      <li class="blog__item">
        <div class="blog__head">
          <img
            src="https://source.unsplash.com/k8oM2_ZT1kQ"
            alt="">
        </div>
        <div class="blog__body">
          <p class="blog__date">2022.07.01</p>
          <h3 class="blog__title">タイトルタイトルタイトルタイトルタイトルタイトル</h3>
          <div class="blog__label-wrapper">
            <span class="blog__label">HTML</span>
            <span class="blog__label">Vue.js</span>
            <span class="blog__label">Nuxt.js</span>
          </div>
        </div>
      </li>
      <li class="blog__item">
        <div class="blog__head">
          <img
            src="https://source.unsplash.com/9Ts7SGQmIuQ"
            alt="">
        </div>
        <div class="blog__body">
          <p class="blog__date">2022.07.01</p>
          <h3 class="blog__title">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</h3>
          <div class="blog__label-wrapper">
            <span class="blog__label">HTML</span>
            <span class="blog__label">Vue.js</span>
            <span class="blog__label">Nuxt.js</span>
          </div>
        </div>
      </li>
      <li class="blog__item">
        <div class="blog__head">
          <img
            src="https://source.unsplash.com/Gp34PCSEbt8"
            alt="">
        </div>
        <div class="blog__body">
          <p class="blog__date">2022.07.01</p>
          <h3 class="blog__title">タイトルタイトルタイトルタイトルタイトルタイトル</h3>
          <div class="blog__label-wrapper">
            <span class="blog__label">HTML</span>
            <span class="blog__label">Vue.js</span>
            <span class="blog__label">Nuxt.js</span>
          </div>
        </div>
      </li>
      <li class="blog__item">
        <div class="blog__head">
          <img
            src="https://source.unsplash.com/ChIYJ9Qt7ao"
            alt="">
        </div>
        <div class="blog__body">
          <p class="blog__date">2022.07.01</p>
          <h3 class="blog__title">タイトルタイトルタイトルタイトルタイトルタイトル</h3>
          <div class="blog__label-wrapper">
            <span class="blog__label">HTML</span>
            <span class="blog__label">Vue.js</span>
            <span class="blog__label">Nuxt.js</span>
          </div>
        </div>
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
  // background: #f5f5f5;
  padding: 24px 0;
  & .blog__list {
    display: grid;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
    gap: 30px 20px;
    grid-auto-rows: minmax(60px,auto);
    grid-template-columns: repeat(3,1fr);
    & .blog__item {
      display: flex;
      background: #fff;
      outline: 1px solid #000;
      cursor: pointer;
      flex-direction: column;
      &:hover {
        opacity: 0.8;
      }
      & .blog__head {
        width: 100%;
      }
      & .blog__body {
        display: flex;
        padding: 16px;
        flex-direction: column;
        flex-grow: 1;
        & .blog__date {
          font-size: 14px;
          margin-bottom: 10px;
        }
        & .blog__title {
          font-size: 16px;
          margin-bottom: 24px;
          flex-grow: 1;
          line-height: 1.2;
        }
        & .blog__label {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
