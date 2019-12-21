import { login } from '../../Api/user'
const user = {
  state: {
    isLogin: localStorage.getItem('token') || false
  },
  mutations: {
    SET_LOGINSTATE(state, value) {
      state.isLogin = value;
    }
  },
  actions: {
    async login({ commit }, user) {
      try {
        const res = await login(user)
        const { data } = res
        if(data) {
          if(data.token) {
            const { token } = data
            commit('SET_LOGINSTATE', true);
            localStorage.setItem('token', token);
          }
        }
        return data
      } catch (error) {
        window.console.log(error)
      }
    },
    logout({ commit }) {
      // 清缓存
      localStorage.removeItem('token');
      // 重置状态
      commit('SET_LOGINSTATE', false);
    }
  }
}

export default user