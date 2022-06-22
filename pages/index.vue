<template>
  <div>
    <!-- <Slider/> -->
    <div class="news">
      <h1>NEWS</h1>
      <ul>
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
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'IndexPage',
  mixins: [linkTo],
  async asyncData ({ $axios }) {
    // const article = await $axios.get('http://localhost/wp-test/nuxt2/wp-json/wp/api/post')
    const news = await $axios.get('http://localhost/wp-test/nuxt2/wp-json/acf/v3/news')
    return {
      // article,
      news: news.data
    }
  },
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
