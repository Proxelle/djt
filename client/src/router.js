import Vue from 'vue'
import Router from 'vue-router'

import Admin from '../src/components/main/AdminPanel.vue'
import SimplePage from '../src/components/main/SimplePage.vue'
import mainPage from '../src/components/main/mainPage.vue'
import Faq from '../src/components/main/Faq.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/main', redirect: '/' },
    {
      path: '/',
      component: mainPage
    }, {
      path: '/admin',
      name: 'admin',
      component: Admin
    }, {
      path: '/faq',
      name: 'Faq',
      component: Faq
    }, {
      path: '*',
      component: SimplePage
    }
  ]
})
