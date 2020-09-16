import api from '@/services/api'

export default {
  namespaced: true,

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
  },
}
