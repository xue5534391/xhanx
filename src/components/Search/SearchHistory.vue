<template>
  <section class="search-history">
    <div class="history-title">
        <span class="title-title font-24">最近搜索</span>
        <div class="title-del"></div>
    </div>
    <div class="history-item" v-for="item in searchResult" :key='item'>
        <div class="icon-time"></div>
        <span class="item-text font-28" @click="join(item)">{{item}}</span>
    </div>
</section>
</template>

<script>
export default {
  name: 'SearchHistory',
  data () {
    return {
      searchResult: this.getStorage()
    }
  },
  methods: {
    // 渲染浏览过的页面记录
    getStorage () {
      const tmp = window.localStorage.getItem('search')
      if (!tmp) {
        return []
      } else {
        return JSON.parse(tmp)
      }
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
  },
  created () {
    this.getStorage()
  }
}
</script>

<style lang='scss'>
.search-history {
    width: 10rem;
    margin: 0 auto
}

.search-history .history-title {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    width: 100%;
    padding: 0 .26666667rem .26666667rem;
    border-bottom: 1px solid #e9e9e9
}

.search-history .history-title .title-title {
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    flex: auto;
    color: #8b8b8b
}

.search-history .history-title .title-del {
    width: .34666667rem;
    height: .36rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAMAAABVyG9ZAAAAV1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNJt775AAAAHHRSTlMALdJnmVoO3SIDTvqIORu3sHl0RPXt2sOilJAubjaycgAAAI5JREFUKM/tzMsOwiAQheFpS6tcW6B3z/s/p2GChuLGuPZbMISfDGV2XMCW0dJFo/GmH5cUMDmZLtJN8PmxYxPMcGeDx9gxQmZ6sN4jI5EpdWMqioyITuGo4nbBs0VTpwZtmdCls8fwT7+l0ndpQ6xTxMbzhKmTwcHTYlayDFLNsMQOfNhfv8KqUdBrSFuepXgT3PziFxEAAAAASUVORK5CYII=) no-repeat;
    background-size: contain
}

.search-history .history-item {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    height: 1.06666667rem;
    padding: 0 0 0 .26666667rem;
    border-bottom: 1px solid #e9e9e9
}

.search-history .history-item .icon-time {
    width: .34666667rem;
    height: .34666667rem;
    margin: 0 .16rem 0 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAASFBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmn+vFLAAAAGHRSTlMA/g9qj/Xn0jYxeCIMwbemiHSrwrvsXE0JR53yAAAAuklEQVQoz4WS2xKDIAxECSFcrIhoL///py2amYAwdR8cmQObQFbV0lqN5I0jAHLGX0CIAM8Vs1kIYqgJgkU2m9FCFmIg6apiAiNn+Fe2Itehjb1eb2YbnPWi1ewEEyNt49H1cZqR1PDFmOYezVTKu0X1SC3u94F1hFYqaxwhBN2iDYs+jBrDU8SGVRvqcUpzG9y8SJqXK7ej8PJQInkoFSBdUQIeZ+6Hkm9H2QdgamKzS2z2cBu2PxH9AqSDBYn5xIsZAAAAAElFTkSuQmCC) no-repeat;
    background-size: contain
}
</style>
