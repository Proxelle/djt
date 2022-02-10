import axios from 'axios'

export default {
  namespaced: true,
  state: {
    usersList: []
  },
  getters: {
    getUsersList (state) {
      return state.usersList
    }
  },
  actions: {
    async sendPasswordAdmin ({ rootState }, data) {
      let res = await axios.post(`${rootState.main.server}/check-adm-pass`, JSON.stringify(data))
      return res.data
    },
    async changeLinksPanel ({ rootState, commit }, data) {
      let res = await axios.post(`${rootState.main.server}/change-links-panel`, JSON.stringify({ data }), {
        headers: { 'Content-Type': 'application/json' }
      })
      if (res.data.length) {
        commit('changeLinksPanel', data)
        return true
      } else return false
    },
    async getUsers ({ rootState, commit }) {
      let res = await axios.get(`${rootState.main.server}/users-list`)
      commit('updateUsersList', res.data)
    },
    getUser ({ rootState }, login) {
      return axios.post(`${rootState.main.server}/get-user`, login)
    },
    async setUser ({ rootState }, data) {
      await axios.post(`${rootState.main.server}/set-user`, JSON.stringify(data))
    }
  },
  mutations: {
    updateUsersList (state, data) {
      state.usersList = data
    }
  }
}
