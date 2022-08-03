<template>
  <div class="container">
    <Header />
    <div class="main">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'App',
  async fetch ({ store }) {
    await console.log(store)
    await store.dispatch('api/getApi')
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity .2s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
