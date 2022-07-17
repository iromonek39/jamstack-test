<template>
  <div class="gsap">
    <div class="area">
      <div class="box gsap-boxA"></div>
    </div>
    <div class="area">
      <div class="box gsap-boxB"></div>
    </div>
    <div class="area wrapper">
      <div class="box boxC gsap-boxC"></div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  name: 'GsapTest',
  created () {
    if (process.client) {
      gsap.registerPlugin(ScrollTrigger)
    }
  },
  mounted () {
    this.scrollItem()
  },
  methods: {
    scrollItem () {
      gsap.to('.gsap-boxA', {
        x: 500,
        y: -700,
        duration: 1,
        scrollTrigger: {
          trigger: '.gsap-boxA',
          start: 'center 90%',
          markers: true
        }
      })
      gsap.to('.gsap-boxB', {
        x: 600,
        rotation: 360,
        duration: 1,
        scrollTrigger: {
          trigger: '.gsap-boxB',
          start: 'top center',
          end: 'top 300px',
          scrub: true,
          markers: true
        }
      })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.wrapper',
          start: 'top top',
          end: 'center 25%',
          scrub: true,
          markers: true
        }
      })
      tl.to('.gsap-boxC', {
        y: 200,
        scale: 2
      })
      tl.to('.gsap-boxC', {
        x: 200,
        scale: 3
      })
      tl.to('.gsap-boxC', {
        rotation: 360,
        y: 800,
        scale: 4
      })
      tl.to('.gsap-boxC', {
        rotation: 90,
        x: 1000,
        y: 1000,
        scale: 5
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.gsap {
  width: 100%;
}
.box {
  position: absolute;
  width: 200px;
  height: 200px;
  background: #000;
  bottom: 0;
}
.boxC {
  top: 0;
}
.area {
  position: relative;
  height: 1500px;
}
.wrapper {
  height: 2000px;
}
</style>
