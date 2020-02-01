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
      const res = await axios.post(`${state.server}/registration`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'multipart/form-data'
          // 'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      console.log(res)
    }
  },
  mutations: {

  }
})
