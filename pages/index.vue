<template>
  <div>
    <!-- <Slider/> -->
    <div class="section">
      <h2 class="section__title-wrapper">
        <p class="section__sub-title">ニュース</p>
        <p class="section__title">NEWS</p>
      </h2>
      <!-- <News :news-data="data" /> -->
    </div>
    <!-- <Pagenation
      :total-count="20"
      :per-page="5"/> -->
    <Pagenation
      :pager="pager"
      :current="Number(page)"/>

    <ul>
      <li
        v-for="item in data"
        :key="item.id">
        <nuxt-link :to="`/${item.id}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>

    <p>ページネーション</p>
    <!-- <Faq /> -->
    <!-- <Masonry /> -->
  </div>
</template>

<script>
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'IndexPage',
  mixins: [linkTo],
  async asyncData ({ params, $axios }) {
    const page = params.p || '1'
    const limit = 10
    const data = await $axios.$get(`http://localhost:8080/wp-json/wp/api/post?limit=${limit}&offset=${page}`) // mac
    // const { data } = await $axios.$get(`http://192.168.33.10/wp-json/wp/api/post?limit=${limit}&offset=${page}`) // windows
    return {
      ...data,
      page,
      pager: [...Array(Math.ceil(data.total / limit)).keys()]
    }
  },
  data () {
    return {
      // data: [
      //   {
      //     id: 1111,
      //     acf: {
      //       title: 'hogehoge',
      //       body: 'ぼでぃぼでぃ'
      //     }
      //   },
      //   {
      //     id: 2222,
      //     acf: {
      //       title: 'hogehoge',
      //       body: 'ぼでぃぼでぃ'
      //     }
      //   }
      // ],
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
