<template>
  <div>
    <Slider/>
    <!-- <Tutorial /> -->
    <div @click="linkTo('blog')">ブログへ</div>
    <div @click="linkTo('form')">お問合せ</div>
    <NuxtLink to="/blog">ブログ</NuxtLink>
    <button @click="log">ログ</button>
  </div>
</template>

<script>
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'IndexPage',
  mixins: [linkTo],
  methods: {
    log () {
      window.alert(1)
    }
  }
}
</script>
