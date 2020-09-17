import api, { headers } from '@/services/api'

export default {
  async all({ commit, dispatch }, payload) {
    try {
      const page = (payload && payload.page) || 1
      const filterType = (payload && payload.filterType) || ''
      const filterValue = (payload && payload.filterValue) || ''
      const { data } = await api.get(
        `users?page=${page}&${filterType}=${filterValue}`,
        headers,
      )
      commit('setUsers', data)
    } catch (err) {
      dispatch('auth/verifyAuthentication', err.response.status)
    }
    commit('setIsLoading', false, { root: true })
  },

  async one({ commit, dispatch }, id) {
    try {
      commit('setIsLoading', true, { root: true })
      const { data } = await api.get(`users/${id}`, headers)
      commit('setUser', data)
    } catch (err) {
      dispatch('auth/verifyAuthentication', err.response.status)
    }
    commit('setIsLoading', false, { root: true })
  },

  async update({ commit }, user) {
    commit('resetErrors', null, { root: true })
    try {
      commit('setIsLoading', true, { root: true })
      const { data } = await api.put(`users/${user.id}`, user, headers)
      commit('setUser', data)
    } catch (err) {
      commit('setErrors', err.response.data, { root: true })
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
}
