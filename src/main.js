import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
// 公共样式
import '../src/assets/styles/base.scss'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/icons/span-active.png'),
  loading: require('./assets/icons/span-active.png'),
  attempt: 1
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
