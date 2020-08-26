<template>
  <div class="page-classify">
    <comment-top></comment-top>
    <commentList :listName="listName" @click="typeApi"></commentList>
    <div class="classify-main">
      <commentMain :classifyMainCenter='classifyMainCenter'></commentMain>
    </div>
  </div>
</template>

<script>
import { commentTop, commentList, commentMain } from '@/components/comment'
import { classificationList, classificationMain } from '@/api/classify.js'
import { unformat } from '@/tool/enc.js'
export default {
  name: 'classify',
  data () {
    return {
      listName: [],
      classifyMainCenter: []
    }
  },
  components: {
    commentTop,
    commentList,
    commentMain
  },
  methods: {
    classificationList () {
      return classificationList()
        .then((response) => {
          this.listName = response.info
        })
    },
    classificationMain (subject) {
      classificationMain(subject)
        .then((response) => {
          // 将数据解码
          this.classifyMainCenter = JSON.parse(unformat(response.info)).comicsList
        })
    },
    // 自定义函数
    typeApi (payload) {
      // 根据分类的不同调用不同的数据
      this.classificationMain(payload.item.targetargument)
    }
  },
  async created () {
    /*
      这里需要将classificationList接口中的targetargument
      做为classificationMain接口中的第一个参数subject
    */
    await this.classificationList()
    this.classificationMain(this.listName[0].targetargument)
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
