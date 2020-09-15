import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},

  modules: {
    auth,
  },

  actions,

  getters,

  mutations,
})
