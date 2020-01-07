const Koa = require('koa')
const static  =require('koa-static')
const session = require('koa-session')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const bouncer = require('koa-bouncer')
const app = new Koa()
const index = require('./routes/index')
const users = require('./routes/users')
const api = require('./routes/api')

// session
app.keys = ['some secret', 'another secret']
const SESS_CONFIG = {
  key: 'name:robin', // 名
  maxAge: 86400000, // 有效期
  httpOnly: true, // 服务器有效
  signed: true // 签名
}
app.use(session(SESS_CONFIG, app))

// 校验
app.use(bouncer.middleware())

// 解决跨域
app.use(cors())

// 加了之后在能访问ctx.request.body
app.use(bodyParser())

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


// 静态服务,例如css文件
app.use(static(`${__dirname}/public`))


app.use(index.routes())
app.use(users.routes())
app.use(api.routes())
app.use(require('./routes/students').routes())

// 全局错误事件
app.on('error', error => {
  console.log('全局错误处理:', error.message)
  // console.error(error)
  // throw error // 错误抛给nodejs
})

app.listen(3100)