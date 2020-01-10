const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const wechat = require('co-wechat')
const app = new Koa()
const config = require('./config')

app.use(bodyParser())
const router = new Router()

// 静态服务
app.use(static(`${__dirname}/`))

router.all('/wechat', wechat(config).middleware(
  async message => {
    console.log('wechat', message)
    return `welcome ${message.Content}`
  }
))

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3100)