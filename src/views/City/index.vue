<template>
  <div class="page-city">
    <comment-top :showLeft="true" :TopName="`当前城市-${cityName}`"></comment-top>
    <div class="city-main">
      <div class="c-mainLeft" ref='section-Left'>
        <div>
        <section class="section-index" v-for="item in newCityList" :key="item.py" :ref='`section-${item.py}`'>
          <p class="py font-24">{{ item.py }}</p>
          <ul v-for="childItem in item.cityNameList" :key="childItem.cityId">
            <li class="city-name" @click="historyPath(childItem)">{{ childItem.name }}</li>
          </ul>
        </section>
        </div>
      </div>
      <div class="c-mainNav">
        <ul>
          <li class="Nav-index font-24" v-for='item in cityLi' :key='item' @click="cityLiFn(item)">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { commentTop } from '@/components/comment'
import { cityApi } from '@/api/city.js'
// 引入vuex 仓库模板
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'city',
  data () {
    return {
      cityList: []
    }
  },
  computed: {
    ...mapGetters('CityModule', ['cityName']),
    //   [
    //       {
    //           'py': 'A',
    //           'cityName': ['北京','安保']
    //       },
    //       {
    //           'py': 'B',
    //           'cityName': ['北京','安保']
    //       }
    //   ]
    newCityList () {
      // 自己想要的数据格式
      const result = []
      this.cityList.forEach((item) => {
        const py = item.pinyin.substr(0, 1).toUpperCase()
        const index = result.findIndex((item) => item.py === py)
        if (index > -1) {
          result[index].cityNameList.push(item)
        } else {
          result.push({
            py,
            cityNameList: [item]
          })
        }
      })
      return result.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt()
      })
    },

    // 右侧城市列表
    cityLi () {
      return this.newCityList.map(item => item.py)
    }
  },
  components: {
    commentTop
  },
  methods: {
    ...mapMutations('CityModule', ['SET_CITY_NAME']),
    cityApi () {
      cityApi()
        .then((res) => {
          if (res.status === 0) {
            this.cityList = res.data.cities
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 点击city列表
    cityLiFn (item) {
      const cityEl = this.$refs[`section-${item}`][0]
      const top = cityEl.offsetTop
      this.bscroll.scrollTo(0, -top)
    },
    historyPath (cityName) {
      this.SET_CITY_NAME(cityName)
      // 返回原来的页面
      const redirect = this.$route.query.redirect || '/'
      this.$router.replace(redirect)
    }
  },
  created () {
    this.cityApi()
  },
  mounted () {
    /* eslint-disable */
    this.bscroll = new Bscroll(this.$refs['section-Left'],{
      click: true
    })
    /* eslint-enable */
  }
}
</script>

<style lang='scss'>
@import "@/assets/styles/main.scss";
.page-city {
  display: flex;
  flex-direction: column;
  height: 100%;

  .city-main {
    flex: 1;
    display: flex;
    overflow: hidden;

    .c-mainLeft {
      flex: 1;
      position: relative;

      .section-index {
        .py {
          background-color: #f4f4f4;
          color: #797d82;
          margin: 0 0 0 15px;
          height: 30px;
          line-height: 30px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        li {
          height: 48px;
          font-size: 14px;
          line-height: 48px;
          margin-left: 20px;
          @include border-Bottom;
        }
      }
    }
    .c-mainNav {
      margin: auto 0;
      .Nav-index {
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
      }
    }
  }
}
</style>
