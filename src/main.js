import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Router from 'vue-router'
import router from './Router'
import store from '../store'
import vueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(vueResource)

Vue.use(Router)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  components: { App },
  router :router,
  store,
}).$mount('#app')
