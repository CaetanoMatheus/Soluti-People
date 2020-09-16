import api from '@/services/api'

const token = window.localStorage.getItem('token')
const headers = { headers: { Authorization: `Bearer ${token}` } }

function verifyAuthentication(status) {
  if (status === 401) {
    window.localStorage.removeItem('token')
    document.location.reload()
  }
}

export default {
  namespaced: true,

  state: {
    authenticatedUser: {},
  },

  getters: {
    getAuthenticatedUser: ({ authenticatedUser }) => authenticatedUser,
  },

  mutations: {
    setAuthenticatedUser: (state, data) => { state.authenticatedUser = data },
  },

  actions: {
    async login({ commit }, credentials) {
      commit('resetErrors', null, { root: true })
      try {
        commit('setIsLoading', true, { root: true })
        const { data } = await api.post('login', credentials)
        window.localStorage.setItem('token', data.token)
      } catch (err) {
        commit('setErrors', err.response.data, { root: true })
      }
      commit('setIsLoading', false, { root: true })
    },

    async logout({ commit }) {
      try {
        commit('setIsLoading', true, { root: true })
        await api.post('logout', headers)
        window.localStorage.removeItem('token')
        document.location.reload()
      } catch (err) {
        verifyAuthentication(err.response.status)
      }
      commit('setIsLoading', false, { root: true })
    },

    async register({ commit }, formData) {
      commit('resetErrors', null, { root: true })
      try {
        commit('setIsLoading', true, { root: true })
        await api.post('register', formData)
      } catch (err) {
        commit('setErrors', err.response.data, { root: true })
      }
      commit('setIsLoading', false, { root: true })
    },

    async authenticatedUser({ commit }) {
      try {
        commit('setIsLoading', true, { root: true })
        const { data } = await api.get('me', headers)
        commit('setAuthenticatedUser', data)
      } catch (err) {
        verifyAuthentication(err.response.status)
      }
      commit('setIsLoading', false, { root: true })
    },
  },
}
