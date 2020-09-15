import api from '@/services/api'

export default {
  namespaced: true,

  state: {
    errors: {},
  },

  getters: {
    getErrors: ({ errors }) => errors,
  },

  mutations: {
    setErrors: (state, errors) => { state.errors = errors },
    resetErrors: (state) => { state.errors = {} },
  },

  actions: {
    async login({ commit }, credentials) {
      commit('resetErrors')
      try {
        const { data } = await api.post('login', credentials)
        window.localStorage.setItem('token', data.token)
      } catch (err) {
        commit('setErrors', err.response.data)
      }
    },

    async register({ commit }, formData) {
      commit('resetErrors')
      try {
        await api.post('register', formData)
      } catch (err) {
        commit('setErrors', err.response.data)
      }
    },

  },
}
