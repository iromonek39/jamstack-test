<template>
  <div>
    <!-- <Slider/> -->
    <div class="section">
      <h2 class="section__title-wrapper">
        <p class="section__sub-title">ブログ</p>
        <p class="section__title">BLOG</p>
      </h2>
    </div>
    <h2>{{ blogDetailData[0].title }}</h2>
    <div v-html="blogDetailData[0].content" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import '@/assets/css/style.css'

export default {
  name: 'IndexPage',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('blog', ['blogData']),
    blogDetailData () {
      return this.blogData.data.filter(item => item.id === Number(this.$route.params.id))
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
// @import '~/assets/css/style.css';
</style>
