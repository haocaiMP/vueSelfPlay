// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import toast from './js/toast.js'
import loading from './js/loading.js'
import store from './store'
Vue.config.productionTip = false
// window.$toast = toast;   
// window.$loading = loading();
window.Bus = new Vue()
// Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
