<template>
  <header>
    <div class="wrapper">
      <h1
        class="logo"
        @click="linkTo('')">
        LOGO
      </h1>
      <nav>
        <ul class="list">
          <li
            class="item"
            @click="linkTo('test')">
            search
          </li>
          <li
            class="item"
            @click="linkTo('blog')">
            blog
          </li>
          <li
            class="item"
            @click="linkTo('news')">
            news
          </li>
          <li
            class="item"
            @click="linkTo('contact-us')">
            contact us
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import linkTo from '@/mixins/linkTo.mixin.js'

export default {
  name: 'Header',
  mixins: [linkTo],
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
}
.wrapper {
  display: flex;
  padding: 20px 40px;
  align-content: center;
  justify-content: space-between;
}
.logo {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
}
.list {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 60px;
}
.logo,
.item {
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
</style>
