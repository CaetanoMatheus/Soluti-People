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
    users: [],
    user: {},
  },

  getters: {
    getUsers: ({ users }) => users,
    getUser: ({ user }) => user,
  },

  mutations: {
    setUsers: (state, data) => { state.users = data },
    setUser: (state, data) => { state.user = data },
    setUserTelephones: (state, data) => { state.user.telephones = data },
  },

  actions: {
    async all({ commit }, page = 1) {
      try {
        const { data } = await api.get(`users?page=${page}`, headers)
        commit('setUsers', data)
      } catch (err) {
        verifyAuthentication(err.response.status)
      }
      commit('setIsLoading', false, { root: true })
    },

    async one({ commit }, id) {
      try {
        commit('setIsLoading', true, { root: true })
        const { data } = await api.get(`users/${id}`, headers)
        commit('setUser', data)
      } catch (err) {
        verifyAuthentication(err.response.status)
      }
      commit('setIsLoading', false, { root: true })
    },

    removeTelephone({ state, commit }, id) {
      const newArray = JSON.parse(JSON.stringify(state.user.telephones))
      const index = newArray.map((telephone) => telephone.id).indexOf(id)
      newArray.splice(index, 1)
      commit('setUserTelephones', newArray)
    },

    addTelephone({ state, commit }, telephone) {
      const newArray = JSON.parse(JSON.stringify(state.user.telephones))
      newArray.push(telephone)
      commit('setUserTelephones', newArray)
    },
  },
}
