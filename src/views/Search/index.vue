<template>
  <div class="page-search">
      <top @sec="searchFn"></top>
      <template v-if="!search">
        <search-recommend :topData='topData' @newclick="topDataFn"></search-recommend>
        <search-history></search-history>
      </template>
      <template v-else>
        <search-content :searchData="searchData"></search-content>
      </template>
  </div>
</template>

<script>
import { Top, SearchRecommend, SearchContent, SearchHistory } from '@/components/Search'
import { searchTop, searchData } from '@/api/search.js'
export default {
  name: 'search',
  data () {
    return {
      topData: [],
      search: '',
      searchData: []
    }
  },
  components: {
    Top,
    SearchRecommend,
    SearchContent,
    SearchHistory
  },
  watch: {
    search (newVal, oldVal) {
      if (newVal) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.searchDataFn(newVal)
        }, 500)
      }
    }
  },
  methods: {
    searchFn (payload) {
      this.search = payload
    },
    searchDataFn (name) {
      searchData(name).then(response => {
        this.searchData = response.info
      })
    },
    searchTop () {
      searchTop().then(response => {
        this.topData = response.info.hotWordsList
      })
    },
    // 重新发送请求
    topDataFn () {
      this.searchTop()
    }
  },
  created () {
    this.searchTop()
  }
}
</script>

<style>

</style>
