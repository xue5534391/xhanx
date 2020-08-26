<template>
  <section class="search-content">
    <p class="item font-28" v-for='item in searchData' :key='item'>{{item}}</p>
  </section>
</template>

<script>
export default {
  name: 'SearchContent',
  props: {
    searchData: {
      type: [Array, Object]
    }
  }
}
</script>

<style lang='scss'>
.search-content {
    box-sizing: border-box;
    width: 10rem;
    margin: 0 auto;
    padding: 0 .26666667rem
}

.search-content .item {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    height: 1.22666667rem;
    padding: 0 0 0 .26666667rem;
    font-weight: 600;
    border-bottom: 1px solid #ddd
}
</style>
