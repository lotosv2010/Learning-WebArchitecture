const Koa = require('koa')
const app = new Koa()
const moment = require('moment')

// 响应时间输出中间件
app.use(async (ctx, next) => {
  await next()
  // 获取响应头，印证执行顺序
  const ret = ctx.response.get('X-Response-Time')
  console.log(`输出计时:请求方法【${ctx.method}】, URL【${ctx.url}】, 响应头(X-Response-Time)【${ret}】`)
})

// 响应时间统计中间件
app.use(async (ctx, next) => {
  const start = moment()
  console.log(`开始计时: ${start.format('YYYY-MM-DD HH:mm:ss')}`)
  await next()
  const ms = moment() - start
  ctx.set('X-Response-Time', `${ms}ms`)
  console.log(`计时结束: ${moment().format('YYYY-MM-DD HH:mm:ss')}`)
})

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

// 响应
app.use(async ctx => {
  // 模拟请求延时200ms
  await sleep(200)
  console.log('响应用户请求')
  // 设置响应状态码
  ctx.status = 200
  // 设置响应类型，等效于ctx.set('Content-Type','text/html')
  ctx.type = 'html'
  // 设置响应体
  ctx.body = '<h1>hello koa</h1>'
})

app.listen(3100)