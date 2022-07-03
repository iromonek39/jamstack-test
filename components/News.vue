<template>
  <div>
    <div class="news section">
      <h2 class="section__title-wrapper">
        <p class="section__sub-title">ニュース</p>
        <p class="section__title">NEWS</p>
      </h2>
      <div class="news__contents">
        <ul class="news__list">
          <li
            v-for="item in news.data"
            :key="item.id"
            class="news__item"
            @click="linkToNewsItem(item)">
            <div class="news__head">
              <time class="news__date">{{ $dayjs(item.updatedAt).locale('ja').format('YYYY.MM.DD (dd)') }}</time>
              <span class="news__label">{{ item.category }}</span>
            </div>
            <div class="news__body">
              <p class="news__text">
                {{ item.title }}
              </p>
            </div>
          </li>
        </ul>
        <div class="news__more">
          <span>More ...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'News',
  mixins: [linkTo],
  async asyncData ({ $axios }) {
  },
  data () {
    return {
      news: {
        total: 3,
        data: [
          {
            id: 1,
            title: 'テストタイトル',
            createdAt: '2020-11-01T00:00:00+09:00',
            updatedAt: '2020-11-01T00:00:00+09:00',
            body: '本文本文本文本文本文本文本文本文本文本文本文',
            category: 'latest',
            thumbnails: {
              large: 'https://source.unsplash.com/9Ts7SGQmIuQ',
              middle: 'https://source.unsplash.com/9Ts7SGQmIuQ',
              small: 'https://source.unsplash.com/9Ts7SGQmIuQ',
              alt: 'テストタイトル'
            }
          },
          {
            id: 2,
            title: 'テストタイトル2',
            createdAt: '2021-01-10T07:30:20+09:00',
            updatedAt: '2021-01-10T07:30:20+09:00',
            body: '本文本文本文本文本文本文本文本文本文本文本文222222',
            category: 'information',
            thumbnails: {
              large: 'https://source.unsplash.com/k8oM2_ZT1kQ',
              middle: 'https://source.unsplash.com/k8oM2_ZT1kQ',
              small: 'https://source.unsplash.com/k8oM2_ZT1kQ',
              alt: 'テストタイトル2'
            }
          },
          {
            id: 3,
            title: 'テストタイトル3',
            createdAt: '2015-01-10T07:30:20+09:00',
            updatedAt: '2015-01-10T07:30:20+09:00',
            body: '本文本文本文本文本文本文本文本文本文本文本文3333333',
            category: 'release',
            thumbnails: {
              large: 'https://source.unsplash.com/Gp34PCSEbt8',
              middle: 'https://source.unsplash.com/Gp34PCSEbt8',
              small: 'https://source.unsplash.com/Gp34PCSEbt8',
              alt: 'テストタイトル3'
            }
          }
        ]
      }
    }
  },
  // async fetch ({ store, $axios }) {
  //   const data = await $axios.$get('http://192.168.33.10/wp-json/wp/api/post')
  //   // const { data } = await $axios.get('http://192.168.33.10/wp-json/wp/api/post')
  //   await store.commit('api/setApi', data)
  // },
  computed: {
    ...mapState('api', ['apiData'])
  },
  created () {
    // console.log(this.$dayjs())
    // this.now = this.$dayjs().format('YYYY-MM-DD')
  },
  methods: {
    ...mapActions('api', ['updateNewsItem', 'getApi']),
    linkToNewsItem (item) {
      this.updateNewsItem(item)
      this.$router.push(`/news/${item.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  & .section__title-wrapper {
    margin-bottom: 48px;
    color: var(--main-text-color);
    font-weight: bold;
    text-align: center;
  }
  & .section__sub-title {
    margin-bottom: 8px;
    font-size: 16px;
  }
  & .section__title {
    font-size: 40px;
  }
}

.news {
  & .news__contents {
    max-width: 680px;
    margin: 0 auto;
    padding: 0 20px;
  }
  & .news__item {
    border-bottom: 1px solid #d8d8d8;
    margin-bottom: 32px;
    padding-bottom: 40px;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
  & .news__head {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    justify-content: space-between;
    & .news__date {
      color: var(--main-text-color);
      font-size: 14px;
      font-weight: bold;
    }
    & .news__label {
      display: block;
      padding: 8px 24px;
      border: 1px solid var(--main-text-color);
      border-radius: 25px;
      color: var(--main-text-color);
      font-size: 14px;
      font-weight: bold;
    }
  }
  & .news__body {
    line-height: 1.5;
    & .news__text {
      color: var(--main-text-color);
      font-size: 14px;
      font-weight: bold;
    }
  }
  .news__more {
    text-align: right;
    color: var(--main-text-color);
    font-size: 14px;
    font-weight: bold;
    span {
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
}
</style>
