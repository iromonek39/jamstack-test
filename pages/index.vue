<template>
  <div>
    <!-- <Slider/> -->
    <div class="section">
      <h2 class="section__title-wrapper">
        <p class="section__sub-title">ニュース</p>
        <p class="section__title">NEWS</p>
      </h2>
      <News :news-data="data" />
    </div>
    <!-- <Faq /> -->
    <!-- <Masonry /> -->
  </div>
</template>

<script>
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'IndexPage',
  mixins: [linkTo],
  async asyncData ({ $axios }) {
    // const data = await $axios.$get('http://localhost:8080/wp-json/wp/api/post') // mac
    const data = await $axios.$get('http://192.168.33.10/wp-json/wp/api/news') // windows
    console.log(data)
    return {
      data
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
  },
  created () {
    // console.log(this.$dayjs())
    // this.now = this.$dayjs().format('YYYY-MM-DD')
  },
  methods: {
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
</style>
