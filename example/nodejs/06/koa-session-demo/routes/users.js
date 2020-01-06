const Router = require('koa-router')
const router = new Router({
  prefix: '/users'
})
router.get('/', async ctx => {
  ctx.body = 'users'
})

router.post('/login', async ctx => {
  const { body } = ctx.request
  console.log('body', body)
  // 登陆逻辑
  ctx.session.userinfo = body.username
  ctx.body = {
    ok: 1,
    message: '登录成功'
  }
})

router.post('/logout', async ctx => {
  delete ctx.session.userinfo
  ctx.body = {
    ok: 1,
    message: '退出登录'
  }
})

router.get('/getUser', require('../middleware/auth'), async ctx => {
  ctx.body = {
    ok: 1,
    message: '获取成功',
    userinfo: ctx.session.userinfo
  }
})

module.exports = router