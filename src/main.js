// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/css/reset.css'
import 'lib-flexible/flexible.js'   //移动端布局框架
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import store from './store'

import backHeader from './components/public/backHeader'
import axios from 'axios';

import VueCorvova from 'vue-cordova'
Vue.use(VueCorvova)


Vue.prototype.$http = axios;
Vue.use(MintUI)
Vue.component(backHeader.name,backHeader)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// document.addEventListener('deviceready', function() {
//   new Vue({
//       el: '#app',
//       router,
//       store,
//       template: '<App/>',
//       components: { App }
//   })
//   window.navigator.splashscreen.hide()
// }, false);