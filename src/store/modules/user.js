import api from '@/services/api'

const token = window.localStorage.getItem('token')
const headers = { headers: { Authorization: `Bearer ${token}` } }

export default {
  namespaced: true,

  state: {
    users: [],
  },

  getters: {
    getUsers: ({ users }) => users,
  },

  mutations: {
    setUsers: (state, data) => { state.users = data },
  },

  actions: {
    async all({ commit }, page = 1) {
      commit('setIsLoading', true, { root: true })
      const { data } = await api.get(`users?page=${page}`, headers)
      commit('setUsers', data)
      commit('setIsLoading', false, { root: true })
    },
  },
}
