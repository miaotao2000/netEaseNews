// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import { List, PullRefresh, Swipe, SwipeItem } from 'vant'
import 'vant/lib/index.css'
import store from './store'
import axios from 'axios'
import Message from './action-component/message'
import Vue from 'vue'

Vue.config.productionTip = false
Vue.prototype.$http = axios // 将axios挂载到vue的原型链上
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(Message)
Vue.use(Swipe).use(SwipeItem)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
