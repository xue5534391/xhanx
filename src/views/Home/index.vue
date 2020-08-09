<template>
  <div class="page-home">
    <!-- header top -->
    <header class="index-header">
      <a href="mine.html?cpid=0">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="search.html?cpid=0">
        <div class="header-search"></div>
      </a>
    </header>
    <!-- header end -->
    <Swiper :autoplay="3000" class="Swiper-image" v-if="bannerImgList.length > 0">
      <Swiperitem v-for="item in bannerImgList" :key="item.id">
        <img
          :src="item.imageurl"
          alt
        />
      </Swiperitem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, Swiperitem } from '@/components/Swiper'
import { bannerApi } from '@/api/home.js'
export default {
  name: 'home',
  data () {
    return {
      bannerImgList: []
    }
  },
  created () {
    bannerApi()
      .then((response) => {
        if (response.code === 200) {
          this.bannerImgList = response.info
        } else {
          console.log(response.code_msg)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  components: {
    Swiper,
    Swiperitem
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .index-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    height: 44px;
    .user-btn {
      width: 25px;
      height: 25px;
      background: url("../../assets/images/user-btn.png");
    }
    .header-logo {
      width: 92px;
      height: 28px;
      background: url("../../assets/images/header-logo.png");
    }
    .header-search {
      width: 25px;
      height: 25px;
      background: url("../../assets/images/header-search.png");
    }
    .user-btn,
    .header-logo,
    .header-search {
      background-size: 100%;
    }
  }
  .Swiper-image img {
    width: 100%;
  }
}
</style>
