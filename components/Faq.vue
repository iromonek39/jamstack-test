<template>
  <div>
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
  </div>
</template>

<script>
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'Faq',
  mixins: [linkTo],
  async asyncData ({ $axios }) {
    // const article = await $axios.get('http://localhost/wp-test/nuxt2/wp-json/wp/api/post')
    // const news = await $axios.get('http://localhost/wp-test/nuxt2/wp-json/acf/v3/news')
    // const news = await $axios.get('http://192.168.33.10/wp-json/wp/api/post') // windows
    // const faq = await $axios.$get('http://192.168.33.10/wp-json/acf/v3/faq') // windows
    // faq.forEach(item => {
    //   item.acf.openFlg = false
    // })
    // return {
    //   faq
    //   // article,
    //   // news: news.data
    // }
  },
  data () {
    return {
      faq: []
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
    }
  },
  async fetch () {
    // 引数に何も入れなくてもthisでアクセスできる
    await console.log(this.$store)
    const faqData = await this.$axios.$get('http://192.168.33.10/wp-json/acf/v3/faq')
    faqData.forEach(item => {
      item.acf.openFlg = false
    })
    this.faq = faqData
  },
  computed: {
  },
  created () {
    // console.log(this.$dayjs())
    // this.now = this.$dayjs().format('YYYY-MM-DD')
  },
  methods: {
    isOpen (key) {
      this.faq[key].acf.openFlg = !this.faq[key].acf.openFlg
      console.log(this.faq)
    }
  }
}
</script>

<style lang="scss" scoped>
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
