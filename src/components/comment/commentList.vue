<template>
  <div class="header-type">
    <div
      class="item"
      :class="{'active': classIndex === index}"
      v-for="(item,index) in listName"
      :key="item.id"
      @click="typeApi(item, index)"
    >{{ item.description }}</div>
  </div>
</template>

<script>
export default {
  name: 'commentList',
  data () {
    return {
      classIndex: 0
    }
  },
  props: {
    listName: {
      type: Array,
      required: true
    }
  },
  methods: {
    typeApi (item, index) {
      this.classIndex = index
      // 传递给父组件需要的分类信息
      this.$emit('click', { item, index })
    }
  }
}
</script>

<style lang='scss'>
.header-type {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 10rem;
  margin: 0 auto;
  padding: 0.26666667rem 0;
  border-bottom: 1px solid #dbd9dc;
}

.header-type .item {
  width: 20%;
  font-size: 0.37333333rem;
  line-height: 0.66666667rem;
  text-align: center;
}

.header-type .item.active {
  color: #e7370c;
}
</style>
