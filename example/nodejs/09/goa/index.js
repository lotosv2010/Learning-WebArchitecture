const Goa = require('./server')
const app = new Goa()

// router
const Router = require('./middlewares/router')
const router = new Router()
router.get('/', async ctx => {
  console.log('index page')
  ctx.body = 'index page'
})
router.get('/post', async ctx => ctx.body = 'post page')
router.get('/list', async ctx => ctx.body = 'list page')
// router.post('/index', async ctx => { ctx.body = 'post page'})
// 路由实例输出父中间件 router.routes()
app.use(router.routes())

// logger中间件
app.use(require('./middlewares/logger'))
// 请求拦截
app.use(require('./middlewares/interceptor'))

// 静态文件服务
// const static = require('./middlewares/static') 
// app.use(static(__dirname + './public'))

// app.use(ctx => {
//   ctx.body = 'hello goa'
// })

/*
function delay() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove('s')
    }, 2000)
  })
}

app.use(async (ctx, next) => {
  ctx.body = '1'
  setTimeout(() => {
    ctx.body += '2' 
  }, 2000)
  await next()
  ctx.body += '3'
})
app.use(async (ctx, next) => { 
  ctx.body += '4'
  await delay()
  await next()
  ctx.body += '5'
})

app.use(async (ctx, next) => {
  ctx.body += '6'
})

// 测试请求拦截
app.listen(3100, '0.0.0.0',() => {
  console.log('服务器已启动,访问地址为:http://127.0.0.1:3100')
})
*/

app.listen(3100,() => {
  console.log('服务器已启动,访问地址为:http://127.0.0.1:3100')
})