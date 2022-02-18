import axios from 'axios'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    usersList: [],
    questions: []
  },
  getters: {
    getUsersList (state) {
      return state.usersList
    },
    getQuestions (state) {
      return state.questions
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
    getAdminUsers ({ rootState }) {
      return axios.get(`${rootState.main.server}/admins`)
    },
    async setUser ({ rootState }, data) {
      await axios.post(`${rootState.main.server}/set-user`, JSON.stringify(data))
    },
    async seveEditPage ({ rootState }, page) {
      await axios.post(`${rootState.main.server}/save-page`, JSON.stringify(page))
    },
    async addQuestion ({ rootState, commit }, data) {
      let res = await axios.post(`${rootState.main.server}/add-question`, JSON.stringify(data))
      if (res.status === 200) {
        commit('addQuestion', { id: res.data.id, ...data })
      }
    },
    async editQuestion ({ rootState, commit }, data) {
      let res = await axios.post(`${rootState.main.server}/edit-question`, JSON.stringify(data))
      if (res.status === 200) {
        commit('editQuestion', data)
      }
    },
    deleteQuestion ({ rootState }, data) {
      return axios.post(`${rootState.main.server}/delete-question`, JSON.stringify(data))
    },
    async getQuestions ({ rootState, commit }) {
      let res = await axios.get(`${rootState.main.server}/get-questions`)
      commit('updateQuestions', res.data)
    }
  },
  mutations: {
    updateUsersList (state, data) {
      state.usersList = data
    },
    updateQuestions (state, data) {
      state.questions = data
    },
    deleteQuestion (state, id) {
      let index = state.questions.findIndex(item => item.id === id)
      if (index > -1) {
        state.questions.splice(index, 1)
      }
    },
    editQuestion (state, data) {
      let index = state.questions.findIndex(item => item.id === data.id)
      Vue.set(state.questions, index, data)
    },
    addQuestion (state, data) {
      state.questions.push(data)
    }
  }
}
