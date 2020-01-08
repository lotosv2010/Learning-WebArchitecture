module.exports = {
  index: async app => {
    // ctx.body = 'user'
    // console.log(app.service)
    const { ctx, service } = app
    ctx.body = await service.user.getName()
  },
  info: async app => {
    const { ctx, service } = app
    ctx.body = await service.user.getAge()
  }
}