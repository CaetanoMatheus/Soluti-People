import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    user,
  },

  state: {
    errors: {},
    isLoading: false,
    headerData: {},
  },

  getters: {
    getIsLoading: ({ isLoading }) => isLoading,
    getErrors: ({ errors }) => errors,
    getHeaderData: ({ headerData }) => headerData,
  },

  mutations: {
    setIsLoading: (state, value) => { state.isLoading = value },
    setErrors: (state, errors) => { state.errors = errors },
    resetErrors: (state) => { state.errors = {} },
    setHeaderData: (state, data) => { state.headerData = data },
  },
})
