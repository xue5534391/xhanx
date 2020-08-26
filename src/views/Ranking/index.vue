<template>
  <div class="page-ranking">
    <comment-top :TopName="'排行'"></comment-top>
    <commentList :listName="listType" @click='typeApi'></commentList>
    <div class="ranking-main">
      <commentMain :classifyMainCenter='rankingMainCenter'></commentMain>
    </div>
  </div>
</template>

<script>
import { commentTop, commentList, commentMain } from '@/components/comment'
import { rankingMain } from '@/api/ranking'
import { unformat } from '@/tool/enc.js'
export default {
  name: 'ranking',
  components: {
    commentTop,
    commentList,
    commentMain
  },
  data () {
    return {
      listMainData: [],
      // 这里自己写了一个假数据
      listType: [
        { ranktype: 6, pageno: 1, pagesize: 20, id: 1, description: '热搜榜' },
        { ranktype: 1, pageno: 1, pagesize: 20, id: 2, description: '人气榜' },
        { ranktype: 4, pageno: 1, pagesize: 20, id: 3, description: '畅销榜' },
        { ranktype: 2, pageno: 1, pagesize: 20, id: 4, description: '新书榜' },
        { ranktype: 5, pageno: 1, pagesize: 20, id: 5, description: '完结榜' },
        { ranktype: 3, pageno: 1, pagesize: 20, id: 6, description: '免费榜' }
      ]
    }
  },
  computed: {
    rankingMainCenter () {
      return this.listMainData.map(item => {
        return {
          bigbook_id: item.bigbookid,
          coverurl: item.coverurl,
          bigbook_name: item.name,
          bigbook_author: item.author,
          bigbookview: item.weekhits
        }
      })
    }
  },
  methods: {
    rankingMain (ranktype) {
      rankingMain(ranktype)
        .then((response) => {
          this.listMainData = JSON.parse(unformat(response.info)).ranklist
        })
    },
    typeApi (payload) {
      this.rankingMain(payload.item.ranktype)
    }
  },
  created () {
    this.rankingMain(this.listType[0].ranktype)
  }
}
</script>
<style lang="scss">
.page-classify {
  display: flex;
  flex-direction: column;
  height: 100%;

  .classify-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
