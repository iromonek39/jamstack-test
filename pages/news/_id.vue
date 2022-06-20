<template>
  <div class="newsDetail">
    <h1>{{ newsDetail.acf.title }}</h1>
    <p>{{ newsDetail.acf.contents }}</p>
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
