const moment = require('moment')
module.exports = async (ctx, next) => {
  console.log(`${ctx.method} ${ctx.path}`)
  const start = moment()
  await next()
  const duration = moment() - start
  console.log(`${ctx.method} ${ctx.path} ${ctx.status} ${duration} ms`)
}