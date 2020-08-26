<template>
  <section class="search-recommend">
    <div class="recommend-title font-26">
      <span class="title-title">大家都在搜</span>
      <span class="title-btn">
        <span class="icon-refresh" @click="newSearchData"></span>刷新
      </span>
    </div>
    <div class="recommend-content font-28">
      <span
        class="recommend-item"
        v-for="item in topData"
        :key="item.id"
        @click="saveStorage
        (item.keyword)"
      >{{ item.keyword }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SearchRecommend',
  props: {
    topData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    newSearchData () {
      this.$emit('newclick')
    },
    // 记录浏览过的页面
    saveStorage (keyword) {
      let tmp = window.localStorage.getItem('search')
      // 判断tmp是否存在
      if (!tmp) {
        tmp = []
      } else {
        tmp = JSON.parse(tmp)
      }
      this.$router.push('/search-result')
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
.search-recommend {
  box-sizing: border-box;
  width: 10rem;
  margin: 0 auto;
  padding: 0.4rem 0.26666667rem;
}

.search-recommend .recommend-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: 100%;
}

.search-recommend .recommend-title .title-title {
  color: #8b8b8b;
}

.search-recommend .recommend-title .title-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  color: #8b8b8b;
}

.search-recommend .recommend-title .title-btn .icon-refresh {
  width: 0.34666667rem;
  height: 0.32rem;
  margin: 0 0.08rem 0 0;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAMAAADTXB33AAAAclBMVEUAAACLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4t8MqE6AAAAJXRSTlMA2+vnNzEStouEWOLKxLCaeFIqCPfxwbuTXxkM1ayffnFAI9Bstt8SVgAAAOFJREFUKM9tkOkagiAQRQdlccmtUlNbrXn/V2wmVJCv84eLR70DsHKsy6soquYEAdkBF+JK+2Iy6NEOzsw5MlFhhJXJanTL24viljH72ceiuCaXsJKye+mnAWi4ewRHze6MBQAXKScet9I203loqcCRokXZKMFjvKxD9vRtcAOvHgWvNGwHIR+1qB7+09HoEDJPQHDpMTAZRjyZJJXuzUSPDhxaOrreqTupmsPTvuNo7F0wMUWjvSIis1lxjgYr1Y13d/8PVGiSuroiU8KGFOgIB07iTXQS9pyG8p3Hokjc8b8gYx4AY0sU+QAAAABJRU5ErkJggg==)
    no-repeat;
  background-size: contain;
}

.search-recommend .recommend-content {
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  margin: 0.4rem 0 0;
}

.search-recommend .recommend-content,
.search-recommend .recommend-content .recommend-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.search-recommend .recommend-content .recommend-item {
  box-sizing: border-box;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  height: 0.90666667rem;
  padding: 0 0.26666667rem;
  margin: 0 0.26666667rem 0.26666667rem 0;
  font-weight: 500;
  border: 1px solid #ddd;
  border-radius: 20px;
}
</style>
