<template>
  <div>
    <!-- <Slider/> -->
    <div class="news section">
      <h2 class="section__title-wrapper">
        <p class="section__sub-title">ニュース</p>
        <p class="section__title">NEWS</p>
      </h2>
      <div class="news__contents">
        <ul class="news__list">
          <li class="news__item">
            <div class="news__head">
              <time class="news__date">2022.06.24 Thu</time>
              <span class="news__label">新着</span>
            </div>
            <div class="news__body">
              <p class="news__text">
                ニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュース
              </p>
            </div>
          </li>
          <li class="news__item">
            <div class="news__head">
              <time class="news__date">2022.06.24 Thu</time>
              <span class="news__label">新着</span>
            </div>
            <div class="news__body">
              <p class="news__text">
                ニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュース
              </p>
            </div>
          </li>
          <li class="news__item">
            <div class="news__head">
              <time class="news__date">2022.06.24 Thu</time>
              <span class="news__label">新着</span>
            </div>
            <div class="news__body">
              <p class="news__text">
                ニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュースニュース
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'IndexPage',
  mixins: [linkTo],
  // async asyncData ({ $axios }) {
  //   // const article = await $axios.get('http://localhost/wp-test/nuxt2/wp-json/wp/api/post')
  //   // const news = await $axios.get('http://localhost/wp-test/nuxt2/wp-json/acf/v3/news')
  //   const news = await $axios.get('http://192.168.33.10/wp-json/wp/api/post') // windows
  //   return {
  //     // article,
  //     news: news.data
  //   }
  // },
  computed: {
  },
  methods: {
    ...mapActions('api', ['updateNewsItem']),
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
