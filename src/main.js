// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.use(Antd).use(Vant)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
