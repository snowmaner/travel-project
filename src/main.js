// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './App'
import router from './router/'
import store from './store/index'


import { AlertPlugin, ToastPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

// import ('@/assets/css/home.css')引入css样式

Vue.config.productionTip = false

/* eslint-disable no-new */


// if('development' === process.env.NODE_ENV){
//   require('./service/city.json')
// }


new Vue({
  el: '#app',
  router,
  store,
  components:{ App },
  template:'<App/>'
})

