<template>
  <div class="container">
    <Header />
    <div class="main">
      <Nuxt />
    </div>
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
