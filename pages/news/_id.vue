<template>
  <div class="newsDetail">
    <h1>{{ newsDetail.title }}</h1>
    <span>{{ newsDetail.category }}</span>
    <p>{{ newsDetail.body }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NewsDetail',
  computed: {
    ...mapState('api', ['newsDetail'])
  }
}
</script>

<style lang="scss" scoped>
.newsDetail {
  max-width: 900px;
  height: auto;
  margin: 0 auto;
}
h1 {
  font-size: 40px;
  margin-bottom: 40px;
}
span {
  display: inline-block;
  margin-bottom: 32px;
  padding: 8px 12px;
  border: 1px solid #000;
  border-radius: 20px;
}
p {
  font-size: 16px;
}
</style>
