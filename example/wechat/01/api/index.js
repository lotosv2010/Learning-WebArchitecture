const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const axios = require('axios')
const moment = require('moment')
const app = new Koa()
const config = require('./config')

app.use(bodyParser())
const router = new Router()

// 静态服务
app.use(static(`${__dirname}/`))

const tokenCache = {
  access_token: '',
  updateTime: moment(),
  expires_in: 7200
}

const wxDomin = `https://api.weixin.qq.com/`

router.get('/getToken', async ctx => {
  const path = `cgi-bin/token`
  const params = `?grant_type=client_credential&appid=${config.appid}&secret=${config.appsecret}`
  const url = `${wxDomin}${path}${params}`
  const res = await axios.get(url)
  Object.assign(tokenCache, res.data, {
    updateTime: moment()
  })
  ctx.body = {
    tokenCache,
    data: res.data
  }
})

router.get('/getUser', async ctx => {
  const path = `cgi-bin/user/get`
  const params = `?access_token=${tokenCache.access_token}`
  const url = `${wxDomin}${path}${params}`
  console.log('getUser', url)
  const res = await axios.get(url)
  ctx.body = res.data
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3100)
