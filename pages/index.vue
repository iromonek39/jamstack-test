<template>
  <div>
    <Slider/>
    <Blog />
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'IndexPage',
  mixins: [linkTo],
  // async fetch ({ store }) {
  //   await store.dispatch('api/getApi')
  // },
  methods: {
    // ...mapActions('api', ['getApi', 'getSingleData'])
  }
}
</script>
