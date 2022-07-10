<template>
  <div>
    <!-- <Slider/> -->
    <div class="section">
      <h2 class="section__title-wrapper">
        <p class="section__sub-title">ブログ</p>
        <p class="section__title">BLOG</p>
      </h2>
    </div>

    <ul class="blog">
      <li
        v-for="item in data"
        :key="item.id"
        class="blog__item"
        @click="toBlogDetailPage(item)">
        <img
          v-if="item.thumbnail"
          :src="item.thumbnail"
          :alt="item.title">
        <img
          v-else
          src="@/assets/images/dummy600_400.jpeg"
          alt="">
        <p class="blog__title">
          {{ item.title }}
        </p>
        <span class="blog__date">
          {{ $dayjs(item.date).locale('ja').format('YYYY.MM.DD') }}
        </span>
      </li>
    </ul>

    <Pagenation
      :pager="pager"
      :current="Number(page)"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Blog',
  async asyncData ({ params, $axios, store }) {
    const page = params.p || '1'
    const limit = 9
    const data = await $axios.$get(`http://localhost:8080/wp-json/wp/api/post?limit=${limit}&offset=${page}`)
    // await store.commit('blog/setBlogData', data)
    return {
      ...data,
      page,
      pager: [...Array(Math.ceil(data.total / limit)).keys()]
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
    ...mapActions('blog', ['updateBlogDetailData']),
    toBlogDetailPage (data) {
      // this.updateBlogDetailData(data)
      this.$router.push(`/post/${data.id}`)
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

.blog {
  display: flex;
  max-width: 920px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  .blog__item {
    width: calc(100% / 3 - 16px);
    .blog__title {
      padding: 16px 0;
      font-size: 16px;
    }
  }
}
</style>
