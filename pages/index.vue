<template>
  <div>
    <!-- <Slider/> -->
    <div class="news">
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
      <!-- <ul>
        <li
          v-for="item in news"
          :key="item.id"
          @click="linkToNewsItem(item)">
          <h2>
            {{ item.acf.title }}
          </h2>
          <p>
            {{ item.acf.contents }}
          </p>
        </li>
      </ul> -->
    </div>
    <div class="question">
      <ul class="question__list">
        <li
          v-for="(item, index) in faq"
          :key="item.acf.question + '-' + item.acf.id"
          class="question__item">
          <div
            class="question__inner"
            @click="isOpen(index)">
            <div class="question__inner-left">
              <p class="question__q">Q</p>
              <p class="question__title">{{ item.acf.question }}</p>
            </div>
            <div class="question__inner-right">
              <div class="cross" />
            </div>
          </div>
          <div
            v-if="item.acf.openFlg"
            class="question__main">
            <div class="question__head">
              <p class="question__a">Q</p>
              <p class="question__head-text">{{ item.acf.answerHead }}</p>
            </div>
            <div class="question__body">
              <p class="question__body-text">{{ item.acf.answerBody }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <Masonry />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'IndexPage',
  mixins: [linkTo],
  async asyncData ({ $axios }) {
    // const article = await $axios.get('http://localhost/wp-test/nuxt2/wp-json/wp/api/post')
    // const news = await $axios.get('http://localhost/wp-test/nuxt2/wp-json/acf/v3/news')
    // const news = await $axios.get('http://192.168.33.10/wp-json/wp/api/post') // windows
    const faq = await $axios.$get('http://192.168.33.10/wp-json/acf/v3/faq') // windows
    faq.forEach(item => {
      item.acf.openFlg = false
    })
    return {
      faq
      // article,
      // news: news.data
    }
  },
  data () {
    return {
      data: [
        {
          id: 1111,
          acf: {
            title: 'hogehoge',
            body: 'ぼでぃぼでぃ'
          }
        },
        {
          id: 2222,
          acf: {
            title: 'hogehoge',
            body: 'ぼでぃぼでぃ'
          }
        }
      ],
      // faq: {
      //   data: [
      //     {
      //       id: 1,
      //       question: '質問内容',
      //       answerHead: '回答見出し',
      //       answerBody: 'テキストテキストテキストテキストテキストテキスト',
      //       isTopDisplay: true
      //     },
      //     {
      //       id: 2,
      //       question: '質問内容',
      //       answerHead: '回答見出し',
      //       answerBody: 'テキストテキストテキストテキストテキストテキスト',
      //       isTopDisplay: true
      //     },
      //     {
      //       id: 3,
      //       question: '質問内容',
      //       answerHead: '回答見出し',
      //       answerBody: 'テキストテキストテキストテキストテキストテキスト',
      //       isTopDisplay: false
      //     },
      //     {
      //       id: 4,
      //       question: '質問内容',
      //       answerHead: '回答見出し',
      //       answerBody: 'テキストテキストテキストテキストテキストテキスト',
      //       isTopDisplay: true
      //     }
      //   ]
      // },
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
      },
      column: {
        data: [
          {
            thumbnail: 'https://source.unsplash.com/Gp34PCSEbt8',
            category: 'トレーニング',
            tags: ['変形膝関節症', '腰椎'],
            title: 'タイトルタイトルタイトルタイトルタイトル',
            body: 'テキストテキストテキストテキストテキストテキストテキスト'
          },
          {
            thumbnail: 'https://source.unsplash.com/Gp34PCSEbt8',
            category: 'トレーニング',
            tags: ['変形膝関節症', '腰椎'],
            title: 'タイトルタイトルタイトルタイトルタイトル',
            body: 'テキストテキストテキストテキストテキストテキストテキスト'
          },
          {
            thumbnail: 'https://source.unsplash.com/Gp34PCSEbt8',
            category: 'トレーニング',
            tags: ['変形膝関節症', '腰椎'],
            title: 'タイトルタイトルタイトルタイトルタイトル',
            body: 'テキストテキストテキストテキストテキストテキストテキスト'
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
    },
    isOpen (key) {
      this.faq[key].acf.openFlg = !this.faq[key].acf.openFlg
      console.log(this.faq)
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

.question {
  max-width: 1100px;
  margin: 0 auto;
  & .question__list {
    width: 100%;
  }
  & .question__item {
    margin-bottom: 20px;
    padding: 0 20px;
    background: #dfebe6;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  & .question__inner {
    display: flex;
    padding: 15px 0;
    align-items: center;
    justify-content: space-between;
    & .question__inner-left {
      display: flex;
    }
  }
  & .cross {
    position: relative;
    width: 3px;
    height: 19px;
    background: #009875;
  }

  & .cross::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 19px;
    height: 3px;
    background: #009875;
  }

  & .question__main {
    padding: 20px 30px 34px 0;
    border-top: 1px solid #C8DED5;
  }
  & .question__head {
    display: flex;
    padding-bottom: 4px;
    align-items: center;
  }
}
</style>
