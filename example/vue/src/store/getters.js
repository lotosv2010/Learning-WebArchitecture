var getters = {
  count: state => state.count,
  projectName: state => state.app.projectName,
  isLogin: state => state.user.isLogin
}
export default getters