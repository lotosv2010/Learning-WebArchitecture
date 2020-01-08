module.exports = {
  index: async app => {
    const { ctx } = app
    ctx.body = 'home'
  },
  detail: async app => {
    const { ctx } = app
    ctx.body = 'home detail'
  }
}