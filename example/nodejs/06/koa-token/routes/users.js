const Router = require('koa-router')
const jwtAuth = require('koa-jwt')
const jwt = require('jsonwebtoken')
const router = new Router({
  prefix: '/users'
})
router.get('/', async ctx => {
  ctx.body = 'users'
})

// token
const secret = 'this is a secret'

router.post('/login-token', async ctx => {
  const { body } = ctx.request
  console.log('body', body)
  // 登陆逻辑
  const userinfo = body.username
  ctx.body = {
    ok: 1,
    message: '登录成功',
    // 生成token返回给客户端
    user: userinfo,
    token: jwt.sign({
      data: userinfo,
      // 设置 token 过期时间，一个小时，秒为单位
      exp: Math.floor(Date.now() / 1000) + 60 * 60
    }, secret)
  }
})

router.get('/getUser-token', jwtAuth({ secret }), async ctx => {
  // 验证通过，state.user
  console.log('ctx', ctx, ctx.state)
  ctx.body = {
    ok: 1,
    message: '获取成功',
    userinfo: ctx.state.user.data
  }
})

module.exports = router