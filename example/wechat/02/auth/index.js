
const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const WechatApi = require('co-wechat-api')
const OAuth = require('co-wechat-oauth')
const app = new Koa()
const config = require('./config')

app.use(bodyParser())
const router = new Router()

// 静态服务
app.use(static(`${__dirname}/`))

const { ServerToken, ClientToken } = require('./db')

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

// 生成url
const oauth = new OAuth(config.appid, config.appsecret,
  async function (openid) {
    return await ClientToken.getToken(openid)
  },
  async function (openid, token) {
    return await ClientToken.setToken(openid, token)
  }
)
router.get('/wxAuthorize', async (ctx, next) => {
  const state = ctx.query.id
  console.log('ctx', ctx.href, state)
  let redirectUrl = ctx.href
  // redirectUrl = 'http://scmw.sit.sf-express.com'
  redirectUrl = redirectUrl.replace('wxAuthorize', 'wxCallback')
  const scope = 'snsapi_userinfo'
  const url = oauth.getAuthorizeURL(redirectUrl, state, scope)
  console.log('url:', url)
  ctx.redirect(url)
})

// 用户回调方法
router.get('/wxCallback', async ctx => {
  // 授权码
  const code = ctx.query.code
  console.log('wxCallback code:', code)
  // 换取token
  const token = await oauth.getAccessToken(code)
  const accessToken = token.data.access_token
  // 获取openid
  const openid = token.data.openid
  console.log('accessToken:', accessToken)
  console.log('openid:', openid)
  ctx.redirect(`/?openid=${openid}`)
})

// 获取用户
router.get('/getUser', async ctx => {
  const openid = ctx.query.openid
  const userinfo = await oauth.getUser(openid)
  console.log('userinfo', userinfo)
  ctx.body = userinfo
})


// 获取JSConfig
router.get('/getJsConfig', async ctx => {
  console.log('getJSSDK', ctx.query)
  const ret = await api.getJsConfig(ctx.query)
  ctx.body = ret
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3100)