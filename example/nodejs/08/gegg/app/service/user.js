const delay = (data, tick) => new Promise(resolve => {
  setTimeout(() => {
    resolve(data)
  }, tick)
})

// 可复用的服务 一个同步，一个异步
// module.exports = {
//   getName() {
//     return delay({
//       name: 'robin'
//     }, 1000)
//   },
//   getAge() {
//     return 20
//   }
// }

module.exports = app => ({
  async getName() {
    const { model } = app
    return await model.user.findAll()
  },
  getAge() {
    return 20
  }
})