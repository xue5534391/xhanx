<template>
  <header class="search-header">
    <div class="header-back"></div>
    <div class="header-search">
      <span class="icon-search"></span>
      <input
        class="search-input font-24"
        type="search"
        placeholder="漫画名丨作者 ^_^"
        v-model="searchVal"
        @input="searchFn"
      />
    </div>
    <div class="header-btn font-30" @click="join(searchVal)">搜索</div>
  </header>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      searchVal: ''
    }
  },
  methods: {
    searchFn () {
      this.$emit('sec', this.searchVal)
    },
    join (keyword) {
      let tmp = window.localStorage.getItem('search')
      // 判断tmp是否存在
      if (!tmp) {
        tmp = []
      } else {
        tmp = JSON.parse(tmp)
      }
      // 当搜索框有内容的时候，才会跳转
      if (keyword) {
        this.$router.push('/search-result')
      } else {
        return
      }
      // 判断keyword是否已经存在
      if (tmp.includes(keyword)) {
        return
      } else {
        tmp.push(keyword)
      }
      // 在存储数据
      window.localStorage.setItem('search', JSON.stringify(tmp))
    }
  }
}
</script>

<style lang='scss'>
.search-header {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: 10rem;
  height: 1.2rem;
  margin: 0 auto;
  background: #e7370c;
  position: relative;
}

.search-header .header-back {
  width: 0.62666667rem;
  height: 0.34666667rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAaCAMAAAAQTvWAAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAQBCAIPDgwGCg0HCwkDBQJD3xKAAAALJJREFUOMvtkksSgzAMQ+38IUB1/9M2QDv52Nm0W95SoxlLGlOLsStNSMEJ7RUA3c0rwIN2RED3uwUY/WbHiSWJ9SgsptXypW2O1JBA5DEesLIS5QoZUqdtKPiPJkN6a1rtjlc0QbqDu74NBN+UUKA09R+qnzhOy261rMwZlTG5H7N2xsmudM61s9zZZ2XTBXU/cTpUYXgs79Q/mTwzAFZOV78syIrOmSa4UuDhF9Dzp/8N878PvMBHvdEAAAAASUVORK5CYII=)
    no-repeat;
  background-size: contain;
  position: absolute;
  top: 0.42666667rem;
  left: 0.4rem;
}

.search-header .header-search {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: 70%;
  border-radius: 6px;
  position: relative;
}

.search-header .header-search .icon-search {
  width: 0.37333333rem;
  height: 0.37333333rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAdVBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Pn2ls/AAAAJnRSTlMAAwey+qV+7sC9XjIL596fl4yFdurY1MtnVk4+lG4tEMhyRyQfKQeVbn0AAAD8SURBVCjPhZJZsoMgEADBBffdaExizPb6/kd8lKVYUZP0BwPVDDNQiJmo9BPHSQJ1FWvONwz++U3FGZBkfdf1WQ1crMUNLbSPaSFPDfiDybuBksIgCwjm3AxC8UYPxdQLKLGigGictLRyLa0DwXg/eIgNHTx1KEnFFllT6eCTix1cbD0mHPdkxUGPDqc9GeJ9k/WvY4NvDSlSuXWWx12HK3tFQ3gJjU+zfb4Ue374ci0vONE8WzdcLfutAAprUXEOtqk0+NB009IKU+3i+M/UL4DaVeFRuR44pYxTXJMcBRjsaLygsZpnZR88r7Hvr/ljkYsPSBcc8dHmnvoHHOUYpdTrexcAAAAASUVORK5CYII=)
    no-repeat;
  background-size: contain;
  position: absolute;
  top: 0.21333333rem;
  left: 0.26666667rem;
}

.search-header .header-search .search-input {
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: 100%;
  height: 0.8rem;
  padding: 0 0.26666667rem 0 0.8rem;
  border: none;
  border-radius: 6px;
}

.search-header .header-btn {
  color: #fff;
  font-weight: 500;
  position: absolute;
  top: 0.29333333rem;
  right: 0.34666667rem;
}
</style>
