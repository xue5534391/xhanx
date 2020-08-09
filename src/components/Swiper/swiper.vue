<template>
  <!-- banner top -->
  <div class="swiper-container">
    <div class="swiper-wrapper" >
      <slot />
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
  <!-- banner end -->
</template>

<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/css/swiper.css'

export default {
  name: 'Swiper',
  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    /* eslint-disable */
    new Swiper(".swiper-container", {
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay:this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: false
      } : false,
      loop:this.loop
    });
    /* eslint-enable */
  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 375px;
  height: 180px;
}
</style>

<style lang="scss">
.swiper-pagination-bullet {
  opacity: 1;
  vertical-align: middle;
  width: 6px;
  height: 6px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: hsla(0, 0%, 100%, 0.7);
}
.swiper-pagination-bullet-active {
  width: 20px;
  height: 10px;
  background: url("../../assets/icons/span-active.png") no-repeat;
  background-size: 100%;
}
</style>
