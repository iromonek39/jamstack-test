<template>
  <div class="blog-detail">
    <div class="blog-detail__top">
      <div class="blog-detail__prev">
        <nuxt-link :to="`/post/${blogDetailData[0].id}`">
          <img src="@/assets/images/icon-arrow-left.svg" alt="前のページ">
          {{ blogDetailData[0].title }}
        </nuxt-link>
      </div>
      <div class="blog-detail__next">
        <nuxt-link :to="`/post/${blogDetailData[2].id}`">
          {{ blogDetailData[2].title }}
          <img src="@/assets/images/icon-arrow-right.svg" alt="次のページ">
        </nuxt-link>
      </div>
    </div>
    <h2>{{ blogDetailData[1].title }}</h2>
    <div v-html="blogDetailData[1].content" />
  </div>
</template>

<script>
import '@/assets/css/style.css'

export default {
  name: 'IndexPage',
  async asyncData ({ params, $axios, $config, payload }) {
    const blogDetailData = await $axios.$get(`${$config.baseURL}/wp-json/wp/api/post/${params.id}`)
    return {
      blogDetailData
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
// @import '~/assets/css/style.css';
.blog-detail {
  .blog-detail__top {
    display: flex;
    margin-bottom: 64px;
    padding: 50px;
    align-items: center;
    .blog-detail__prev,
    .blog-detail__next {
      width: 50%;
      a {
        display: flex;
        align-items: center;
        img {
          width: 30px;
          margin: 20px;
        }
      }
    }
    .blog-detail__next {
      a {
        justify-content: flex-end;
      }
    }
  }
}
</style>
