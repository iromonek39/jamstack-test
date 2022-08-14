<template>
  <div class="blog">
    <Search
      @searchResults="getSearchResults"/>
    <h2>都道府県</h2>
    <select
      id="prefs"
      v-model="selectPrefs"
      name="prefs">
      <option
        v-for="pref in prefs"
        :key="pref.name"
        :value="pref.name">
        {{ pref.name }}
      </option>
    </select>
    <h2>地域</h2>
    <select
      id="city"
      name="city">
      <option
        v-for="city in filterPrefs[0].cities"
        :key="city.name"
        :value="city.name">
        {{ city.name }}
      </option>
    </select>
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
      <li
        v-for="item in blogs.data"
        :key="item.id"
        class="blog__item">
        <div class="blog__head">
          <img
            v-if="item.thumbnails.large"
            :src="item.thumbnails.large"
            alt="">
        </div>
        <div class="blog__body">
          <p class="blog__date">{{ $dayjs(item.updatedAt).locale('ja').format('YYYY.MM.DD') }}</p>
          <h3 class="blog__title">{{ item.title }}</h3>
          <div class="blog__label-wrapper">
            <span
              v-for="(tag, index) in item.tags"
              :key="item.id + '-' + index"
              class="blog__label">
              {{ tag }}
            </span>
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
      selectPrefs: '北海道',
      filterPrefs: [],
      prefs: [
        {
          name: '北海道',
          cities: [
            { name: '稚内', id: '011000' },
            { name: '旭川', id: '012010' }
          ]
        },
        {
          name: '青森',
          cities: [
            { name: '青森', id: '011000' },
            { name: '八戸', id: '011000' }
          ]
        }
      ],
      blogs: {
        total: 5,
        data: [
          {
            id: 1,
            title: 'テストタイトル',
            createdAt: '2020-11-01T00:00:00+09:00',
            updatedAt: '2020-11-01T00:00:00+09:00',
            body: '本文本文本文本文本文本文本文本文本文本文本文',
            tags: ['HTML', 'Vue.js', 'Nuxt.js'],
            thumbnails: {
              large: 'https://source.unsplash.com/k8oM2_ZT1kQ',
              middle: 'https://source.unsplash.com/k8oM2_ZT1kQ',
              small: 'https://source.unsplash.com/k8oM2_ZT1kQ',
              alt: 'テストタイトル'
            }
          },
          {
            id: 2,
            title: 'テストタイトル2テストタイトル2テストタイトル2テストタイトル2テストタイトル2テストタイトル2テストタイトル2',
            createdAt: '2021-01-10T07:30:20+09:00',
            updatedAt: '2021-01-10T07:30:20+09:00',
            body: '本文本文本文本文本文本文本文本文本文本文本文222222',
            tags: ['HTML', 'Vue.js', 'Nuxt.js'],
            thumbnails: {
              large: 'https://source.unsplash.com/MMnd8iwu9xE',
              middle: 'https://source.unsplash.com/MMnd8iwu9xE',
              small: 'https://source.unsplash.com/MMnd8iwu9xE',
              alt: 'テストタイトル2'
            }
          },
          {
            id: 3,
            title: 'テストタイトル3',
            createdAt: '2015-01-10T07:30:20+09:00',
            updatedAt: '2015-01-10T07:30:20+09:00',
            body: '本文本文本文本文本文本文本文本文本文本文本文3333333',
            tags: ['HTML', 'Vue.js', 'Nuxt.js', 'css', 'HTML', 'Vue.js', 'Nuxt.js'],
            thumbnails: {
              large: 'https://source.unsplash.com/Gp34PCSEbt8',
              middle: 'https://source.unsplash.com/Gp34PCSEbt8',
              small: 'https://source.unsplash.com/Gp34PCSEbt8',
              alt: 'テストタイトル3'
            }
          },
          {
            id: 4,
            title: 'テストタイトル4',
            createdAt: '2015-01-10T07:30:20+09:00',
            updatedAt: '2015-01-10T07:30:20+09:00',
            body: '本文本文本文本文本文本文本文本文本文本文本文3333333',
            tags: [],
            thumbnails: {
              large: 'https://source.unsplash.com/K3QQLUlqVVg',
              middle: 'https://source.unsplash.com/K3QQLUlqVVg',
              small: 'https://source.unsplash.com/K3QQLUlqVVg',
              alt: 'テストタイトル4'
            }
          },
          {
            id: 5,
            title: 'テストタイトル5',
            createdAt: '2015-01-10T07:30:20+09:00',
            updatedAt: '2015-01-10T07:30:20+09:00',
            body: '本文本文本文本文本文本文本文本文本文本文本文5555555',
            tags: ['css'],
            thumbnails: {
              large: 'https://source.unsplash.com/km3QVgymekE',
              middle: 'https://source.unsplash.com/km3QVgymekE',
              small: 'https://source.unsplash.com/km3QVgymekE',
              alt: 'テストタイトル5'
            }
          }
        ]
      },
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
  watch: {
    selectPrefs (val) {
      this.doFilterPrefs(val)
    }
  },
  created () {
    // this.getApi()
    // this.getSingleData(2113)
  },
  mounted () {
    this.doFilterPrefs(this.selectPrefs)
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
    },
    doFilterPrefs (pref) {
      this.filterPrefs = this.prefs.filter(item => item.name === pref)
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
    grid-auto-rows: minmax(60px, auto);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
        height: 215px;
        background: #797979;
        img {
          width: 100%;
          height: 100%;
          vertical-align: bottom;
          object-fit: contain; // 縦横綺麗に配置するなら
          object-fit: cover; // 表示領域いっぱいに配置するなら
        }
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
        & .blog__label-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          & .blog__label {
            display: block;
            padding: 3px 8px;
            font-size: 12px;
            border: 1px solid #000;
            border-radius: 20px;
          }
        }
      }
    }
  }
}
</style>
