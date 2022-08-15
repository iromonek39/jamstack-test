<template>
  <header class="header">
    <div class="header__inner">
      <h1
        class="header__logo">
        <nuxt-link to="/">
          <img
            src="@/assets/images/logo.svg"
            alt="">
        </nuxt-link>
      </h1>
      <nav class="nav">
        <ul class="nav__list">
          <li
            class="nav__item"
            @click="linkTo('marukame?filter=/udon/')">
            丸亀
          </li>
          <li
            class="nav__item"
            @click="linkTo('post')">
            post
          </li>
          <li
            class="nav__item"
            @click="linkTo('gsap-test')">
            gsaptest
          </li>
          <li
            class="nav__item"
            @click="linkTo('parallax')">
            parallax
          </li>
          <li
            class="nav__item"
            @click="linkTo('test')">
            filterTest
          </li>
          <li
            class="nav__item"
            @click="linkTo('blog')">
            blog
          </li>
          <li
            class="nav__item"
            @click="linkTo('grid')">
            grid
          </li>
          <li
            class="nav__item"
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
.header {
  width: 100%;

  .header__inner {
    display: flex;
    padding: 16px 32px;
    align-items: center;
    justify-content: space-between;
  }

  .header__logo {
    width: 180px;
    &:hover {
      opacity: 0.8;
    }
  }
}

.nav {
  .nav__list {
    display: flex;
    align-items: center;
  }
  .nav__item {
    padding: 0 16px;
    color: var(--main-text-color);
    cursor: pointer;
    font-weight: bold;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
