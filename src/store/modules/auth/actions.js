import api, { headers } from '@/services/api'

export default {
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

  async logout({ commit, dispatch }) {
    try {
      commit('setIsLoading', true, { root: true })
      await api.post('logout', headers)
      window.localStorage.removeItem('token')
      document.location.reload()
    } catch (err) {
      dispatch('verifyAuthentication', err.response.status)
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

  async authenticatedUser({ commit, dispatch }) {
    try {
      commit('setIsLoading', true, { root: true })
      const { data } = await api.get('me', headers)
      commit('setAuthenticatedUser', data)
    } catch (err) {
      dispatch('verifyAuthentication', err.response.status)
    }
    commit('setIsLoading', false, { root: true })
  },

  verifyAuthentication(context, status) {
    if (status === 401) {
      window.localStorage.removeItem('token')
      document.location.reload()
    }
  },
}
