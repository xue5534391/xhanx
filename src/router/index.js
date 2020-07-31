import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Classify from '../views/Classify'
import All from '../views/All'
import Favorite from '../views/All/Favorite'
import History from '../views/All/History'
import My from '../views/My'
import Ranking from '../views/Ranking'
import Vip from '../views/Vip'

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
    { path: '/', redirect: '/home' }
  ]
})

export default router
