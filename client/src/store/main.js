import axios from 'axios'

export default {
  namespaced: true,
  state: {
    // server: 'http://localhost:8082/',
    server: 'http://api.jagdterrier.ru',
    linksPanel: [],
    user: {},
    pages: [],
    naveMenu: [],
    subNaveMenu: [],
    screenWidth: 0
  },
  getters: {
    getServerName (state) {
      return state.server
    },
    getLinksPanel (state) {
      return state.linksPanel
    },
    getPages: (state) => state.pages,
    getPage (state) {
      return value => state.pages.find(item => item.link === value)
    },
    getPageName (state) {
      return value => {
        let result = ''
        state.pages.forEach(item => {
          if (item.link === value) result = item.name
        })
        return result
      }
    },
    getNavMenu (state) {
      return state.naveMenu
    },
    getSubNavMenu (state) {
      return state.subNaveMenu
    },
    getScreenWidth (state) {
      return state.screenWidth
    }
  },
  actions: {
    async sendRegistrationData ({ state }, data) {
      await axios.post(`${state.server}/registration`, JSON.stringify(data))
    },
    sendMail ({ state }, data) {
      axios.post(`${state.server}/mail`, JSON.stringify(data))
    },
    async getlinksPanel ({ state, commit }) {
      let res = await axios.get(`${state.server}/links-panel`)
      commit('changeLinksPanel', res.data)
    },
    async checkLogin ({ state, commit }, data) {
      let res = await axios.post(`${state.server}/check-login`, JSON.stringify(data))
      if (res.data) {
        commit('saveUser', res.data)
        return true
      } else return false
    },
    async getPages ({ state, commit }) {
      let res = await axios.get(`${state.server}/pages`)
      commit('savePages', res.data)
    },
    async getNavMenu ({ state, commit }) {
      let res = await axios.get(`${state.server}/nav-menu`)
      commit('saveNaveMenu', res.data)
    },
    async getSubNavMenu ({ state, commit }) {
      let res = await axios.get(`${state.server}/sub-nav-menu`)
      commit('saveSubNaveMenu', res.data)
    }
  },
  mutations: {
    changeLinksPanel (state, data) {
      state.linksPanel = data
    },
    saveUser (state, data) {
      state.user = data
    },
    savePages (state, data) {
      state.pages = data
    },
    saveNaveMenu (state, data) {
      state.naveMenu = data
    },
    saveSubNaveMenu (state, data) {
      state.subNaveMenu = data
    },
    saveSceenWidth (state, data) {
      state.screenWidth = data
    }
  }
}
