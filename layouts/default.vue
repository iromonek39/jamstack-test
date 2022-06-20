<template>
  <div>
    <Header />
    <Nuxt />
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
