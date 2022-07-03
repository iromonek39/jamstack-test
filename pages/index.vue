<template>
  <div>
    <!-- <Slider/> -->
    <News />
    <Faq />
    <Masonry />
  </div>
</template>

<script>
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'IndexPage',
  mixins: [linkTo],
  async asyncData ({ $axios }) {
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
</style>
