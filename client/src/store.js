import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    server: 'http://localhost:3000',
    linksPanel: [{ name: 'q', link: 'q' }, { name: 'w', link: 'w' }, { name: 'e', link: 'e' }]
  },
  getters: {
    getServer (state) {
      return state.server
    },
    getLinksPanel (state) {
      return state.linksPanel
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
    },
    async sendPasswordAdmin ({ state }, password) {
      let res = await axios.post(`${state.server}/admin`, JSON.stringify({ password }), {
        headers: { 'Content-Type': 'application/json' }
      })
      return res.data
    },
    async getLinksPanel ({ state, commit }) {
      let res = await axios.get(`${state.server}/links-panel`)
      console.log('links-panel', res.data)
      commit('changeLinksPanel', res.data)
    },
    async changeLinksPanel ({ state, commit }, data) {
      let res = await axios.post(`${state.server}/change-links-panel`, JSON.stringify({ data }), {
        headers: { 'Content-Type': 'application/json' }
      })
      console.log('links-panel', res.data)
      commit('changeLinksPanel', res.data)
    }
  },
  mutations: {
    changeLinksPanel (state, data) {
      state.linksPanel = data
    }
  }
})
