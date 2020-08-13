<template>
  <section class="index-recommend">
    <div class="recommend-divide"></div>
    <div class="recommend-title">
      <div class="title-group">
        <img class="title-icon" :src="info.icon" />
        <span class="title-text font-36">{{info.name}}</span>
      </div>
      <span class="title-more font-24">更多 &gt;</span>
    </div>
    <!-- recommend-type-1 -->
    <div v-if="info.comicsviewtype === 1" class="recommend-type-1">
      <div class="item" v-for="childrenItem in info.comicslist" :key="childrenItem.bigbook_id">
        <img class="item-pic" :src="JSON.parse(childrenItem.extension).xsyzfx" />
        <p class="item-name font-28">{{childrenItem.bigbook_name}}</p>
        <p class="item-text font-24">{{JSON.parse(childrenItem.extension).recommendwords}}</p>
      </div>
    </div>
    <!-- recommend-type-5 -->
    <div v-if="info.comicsviewtype === 5" class="recommend-type-5">
      <div class="item" v-for="childrenItem in info.comicslist" :key="childrenItem.bigbook_id">
        <img class="item-pic" :src="childrenItem.coverurl" />
        <p class="item-name font-28">{{childrenItem.bigbook_name}}</p>
        <p class="item-text font-24">{{childrenItem.key_name}}</p>
      </div>
    </div>
    <!-- recommend-type-3 -->
    <div v-if="info.comicsviewtype === 3" class="recommend-type-3">
      <div
        class="item"
        v-for="(childrenItem,itemIndex) in info.comicslist"
        :key="childrenItem.bigbook_id"
      >
        <img
          class="item-pic"
          :src="childrenItem.extension ? JSON.parse(childrenItem.extension).scfk344_202 : null "
        />
        <div class="ranking-group">
          <div class="item-ranking" :class="`item-ranking-${itemIndex + 1}`"></div>
        </div>
        <div class="text-group">
          <p class="item-name font-30">{{childrenItem.bigbook_name}}</p>
          <p class="item-hot font-24">
            人气：
            <span class="hot-hot">{{childrenItem.bigbookview | Company('亿','万')}}</span>
          </p>
          <p
            class="item-text font-24"
          >主角莫凡继承了一个神奇的项链。一觉醒来世界大变。崇尚科学的世界变成了崇尚魔法。但还是有着在社会底层挣扎的爸爸、纯美却不能走路的非血缘妹妹…不过，莫凡发现大家都只能够主修一系魔法，自己却是全系全能法师！</p>
        </div>
      </div>
    </div>
  </section>
  <!--  -->
</template>

<script>
export default {
  name: 'indexSection',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  filters: {
    Company: (value, Billion, thousand) => {
      if (value > 10000 && value < 100000000) {
        return value + thousand
      } else {
        return value + Billion
      }
    }
  }
}
</script>

<style lang='scss'>
//引入公用的scss
@import "@/assets/styles/main.scss";
.page-home {
  @include recommend;
}
</style>
