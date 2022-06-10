<template>
  <div class="blogDetail">
    <h1 v-html="blogDetailData.title" />
    <div class="img">
      <img
        v-if="blogDetailData.thumbnail"
        :src="blogDetailData.thumbnail"
        :alt="blogDetailData.title">
      <img
        v-else
        src="@/assets/images/kintere.jpeg">
    </div>
    <p v-html="blogDetailData.content" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BlogDetail',
  computed: {
    ...mapState('blog', ['blogDetailData'])
  }
}
</script>
