const Koa = require('koa')
const hbs = require('koa-hbs')
const static  =require('koa-static')
const moment = require('moment')
const app = new Koa()
const helpers = require('./utils/helpers')
const index = require('./routes/index')
const users = require('./routes/users')
const db = require('./models/db')
const getVip = require('./middleware/get-vip')

// 错误处理中间件
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    // 响应用户
    ctx.status = error.statusCode || error.status || 500
    ctx.body = error.message

    // 触发应用层级错误事件
    ctx.app.emit('error', error, ctx)
    console.log('捕获到错误:', error.message)
  }
})

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

// 静态服务,例如css文件
app.use(static(`${__dirname}/public`))

app.use(getVip)

// 响应
// app.use(async ctx => {
//   // 模拟请求延时200ms
//   await sleep(200)
//   console.log('响应用户请求')
//   // 设置响应状态码
//   ctx.status = 200
//   // 设置响应类型，等效于ctx.set('Content-Type','text/html')
//   ctx.type = 'html'
//   // 设置响应体
//   ctx.body = '<h1>hello koa</h1>'
// })

app.use(hbs.middleware({
  viewPath: `${__dirname}/views`, // 视图根目录
  defaultLayout: 'layout', // 默认布局页面
  partialsPath: `${__dirname}/views/partials`, // 注册partial目录
  disableCache: true // 开发阶段不缓存
}))

app.use(index.routes())
app.use(users.routes())

// 全局错误事件
app.on('error', error => {
  console.log('全局错误处理:', error.message)
  // console.error(error)
  // throw error // 错误抛给nodejs
})

app.listen(3100)