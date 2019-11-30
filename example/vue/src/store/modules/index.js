const app = {
  // namespaced: true,
  state: {
    projectName: ''
  },
  mutations: {
    SET_PROJECT_NAME(state) {
      state.projectName = 'Web Architecture'
    }
  },
  actions: {
    setProjectName({ commit }) {
      commit('SET_PROJECT_NAME')
    }
  }
}
export default app