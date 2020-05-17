import Vue from 'vue'
import Vuex from 'vuex'

import main from './store/main'
import admin from './store/admin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main,
    admin
  }
})
