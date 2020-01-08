const moment = require('moment')
module.exports = async function(ctx, next) {
  // 拦截操作请求 request
  const start = moment()
  console.log(`start: ${ctx.url}`)
  await next()
  const end = moment()
  console.log(`请求${ctx.url}, 耗时${end-start}ms`)
}