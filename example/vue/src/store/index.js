import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/index'
import user from './modules/user'
import goods from './modules/goods'
import cart from './modules/cart'
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
    app,
    user,
    goods,
    cart
  },
  getters
})
