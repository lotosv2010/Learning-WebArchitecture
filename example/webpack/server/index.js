const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router.get('/api/info', ctx => {
  ctx.body = {
    name: 'webpack',
    age: 5,
    message: 'webpack learning'
  }
})


app.use(router.routes())

app.listen(3100)