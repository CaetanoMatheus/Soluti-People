import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    user,
    errors: {},
  },

  state: {
    isLoading: false,
  },

  getters: {
    getIsLoading: ({ isLoading }) => isLoading,
    getErrors: ({ errors }) => errors,
  },

  mutations: {
    setIsLoading: (state, value) => { state.isLoading = value },
    setErrors: (state, errors) => { state.errors = errors },
    resetErrors: (state) => { state.errors = {} },
  },
})
