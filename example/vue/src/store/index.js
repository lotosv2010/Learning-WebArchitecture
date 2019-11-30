import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/index'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    SET_COUNT(state, value) {
      state.count = value
    }
  },
  actions: {
    setCount({ commit }, value) {
      commit('SET_COUNT', value)
    }
  },
  modules: {
    app
  },
  getters
})
