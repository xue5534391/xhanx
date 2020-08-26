import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Classify from '../views/Classify'
import All from '../views/All'
import Favorite from '../views/All/Favorite'
import History from '../views/All/History'
import My from '../views/My'
import Ranking from '../views/Ranking'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'
import Vip from '../views/Vip'
import City from '../views/City'

import store from '../store'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/classify', component: Classify },
    {
      path: '/all',
      component: All,
      children: [
        { path: 'favorite', component: Favorite },
        { path: 'history', component: History },
        { path: '', redirect: '/all/history' }
      ]
    },
    { path: '/my', component: My },
    { path: '/ranking', component: Ranking },
    { path: '/vip', component: Vip },
    { path: '/search', component: Search },
    { path: '/search-result', component: SearchResult },
    { path: '/city', component: City },
    { path: '/', redirect: '/home' }
  ]
})

router.beforeEach((to, from, next) => {
  // 判断当前城市页面中是否选择了城市
  // 是要store有数据，说明选择了城市
  if (!store.state.CityModule.cityData && to.path !== '/city') {
    // 进入当前city选择页面
    next({
      path: '/city',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})
export default router
