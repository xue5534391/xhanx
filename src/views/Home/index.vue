<template>
  <div class="page-home">
    <!-- header top -->
    <index-home></index-home>
    <!-- header end -->

    <div class="main">
      <!-- swiper top -->
      <Swiper :autoplay="3000" class="Swiper-image" v-if="bannerImgList.length > 0">
        <Swiperitem v-for="item in bannerImgList" :key="item.id">
          <img :src="item.imageurl" alt />
        </Swiperitem>
      </Swiper>
      <!-- swiper end -->

      <!-- nav top -->
        <index-nav></index-nav>
      <!-- nav end -->

      <!-- recommend top -->
        <index-section v-for="item in recommendList" :key='item.specialid' :info="item"></index-section>
      <!-- recommend end -->
    </div>
  </div>
</template>

<script>
// 图片懒加载
import { Swiper, Swiperitem } from '@/components/Swiper'
import { bannerApi, recommendApi } from '@/api/home.js'
// home首页专用的组件
import { indexHome, indexNav, indexSection } from './components/index'
export default {
  name: 'home',
  data () {
    return {
      bannerImgList: [],
      recommendList: []
    }
  },
  methods: {
    bannerApi () {
      bannerApi()
        .then((response) => {
          this.bannerImgList = response.info
        })
    },
    recommendApi () {
      recommendApi()
        .then((response) => {
          this.recommendList = response.info
        })
    }
  },
  created () {
    this.bannerApi()
    this.recommendApi()
  },
  components: {
    Swiper,
    Swiperitem,
    indexHome,
    indexNav,
    indexSection
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .main {
    flex: 1;
    overflow-y: auto;
  }

  .Swiper-image img {
    width: 100%;
  }

}
</style>
