const Koa = require('koa')
const static  =require('koa-static')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const index = require('./routes/index')
const users = require('./routes/users')

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

// 全局错误事件
app.on('error', error => {
  console.log('全局错误处理:', error.message)
  // console.error(error)
  // throw error // 错误抛给nodejs
})

app.listen(3100)