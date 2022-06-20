<template>
  <div class="slider">
    <client-only>
      <swiper
        :options="sliderOptions">
        <swiper-slide>
          <img src="https://source.unsplash.com/kTomslkbYA4" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="https://source.unsplash.com/yd4ubMUNTG0" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="https://source.unsplash.com/owBcefxgrIE" alt="">
        </swiper-slide>
      </swiper>
    </client-only>
    <div
      slot="pagination"
      class="pagination"/>
    <div
      slot="button-prev"
      class="swiper-button-prev"/>
    <div
      slot="button-next"
      class="swiper-button-next"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sliderOptions: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: '.pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  text-align: center;
}
.pagination {
  margin: 0 auto;
}
</style>
