import Vue from 'vue'
import Router from 'vue-router'
import history from '@/Pages/history.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/history',
      name: 'history',
      component: history
    }
  ]
})
