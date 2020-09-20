import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,

  state: {
    authenticatedUser: {},
    isAuthenticated: window.localStorage.getItem('token'),
  },

  getters,

  mutations,

  actions,
}
