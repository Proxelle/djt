import Vue from 'vue'
import Router from 'vue-router'

import Admin from '../src/components/main/AdminPanel.vue'
import SimplePage from '../src/components/main/SimplePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }, {
      path: '*',
      component: SimplePage
    }
  ]
})
