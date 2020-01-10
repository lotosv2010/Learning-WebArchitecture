
const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const WechatApi = require('co-wechat-api')
const app = new Koa()
const config = require('./config')

app.use(bodyParser())
const router = new Router()

// 静态服务
app.use(static(`${__dirname}/`))

const { ServerToken } = require('./db')

const api = new WechatApi(
  config.appid,
  config.appsecret,
  // 获取token
  async () => await ServerToken.findOne(),
  // 存储token
  async token => await ServerToken.updateOne({}, token, { upsert: true })
) 

router.get('/getFollowers', async ctx => {
  let res = await api.getFollowers()
  res = await api.batchGetUsers(res.data.openid)
  ctx.body = res
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3100)