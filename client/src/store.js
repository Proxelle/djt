import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    server: 'http://localhost:3000'
  },
  getters: {
    getServer (state) {
      return state.server
    }
  },
  actions: {
    async sendRegistrationData ({ state }, data) {
      const res = await axios.post(`${state.server}/registration`, data)
      console.log(res)
    }
  },
  mutations: {

  }
})
