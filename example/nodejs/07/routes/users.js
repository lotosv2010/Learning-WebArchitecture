const Router = require('koa-router')
const jwtAuth = require('koa-jwt')
const jwt = require('jsonwebtoken')
const upload = require('koa-multer')({ dest: "./public/images" })
const bouncer = require('koa-bouncer')
const router = new Router({
  prefix: '/users'
})
// router.get('/', async ctx => {
//   ctx.body = 'users'
// })

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

// restFul
const users = [
  { id: 1, name: 'tom' },
  { id: 2, name: 'jerry' }
]
router.get('/', ctx => {
  const { name } = ctx.query // name = xxx
  console.log("GET /users", name);
  let data = users
  if(name) {
    data = data.filter(u => u.name === name)
  }
  ctx.body = {
    ok: 1,
    data
  }
})

router.get('/:id', ctx => {
  const { id } = ctx.params
  console.log(ctx.params)
  const data = users.filter(u => u.id == id)
  ctx.body = {
    ok: 1,
    data
  }
})

// router.post('/', ctx => {
//   const { body: user } = ctx.request
//   user.id = users.length + 1
//   users.push(user)
//   ctx.body = {
//     ok: 1,
//     user
//   }
// })

router.put('/', ctx => {
  const { body: user } = ctx.request
  console.log(user)
  const index = users.findIndex(u => u.id === user.id)
  if(index > -1) {
    users[index] = user
  }
  ctx.body = {
    ok: 1,
    users
  }
})

router.delete('/:id', ctx => {
  const { id } = ctx.params
  const index = users.findIndex(u => u.id === +id)
  console.log(ctx.params, index)
  if(index > -1) {
    users.splice(index, 1)
  }
  ctx.body = {
    ok: 1
  }
})

// 上传
router.post('/upload', upload.single('file'), ctx => {
  // 注意数据存储在原始请求中
  console.log(ctx.req.file)
  console.log(ctx.req.body)
  ctx.body = {
    ok: 1,
    message: '上传成功'
  }
})

// 校验
const val = async(ctx, next) => {
  try {
    const hasUser = () => new Promise(resolve => resolve(true))
    ctx
      .validateBody('name')
      .required('要求提供用户')
      .isString()
      .trim()
      .isLength(3, 16, '用户名长度为6~16位')
      // 是否邮箱格式
      // .isEmail('非法的邮箱格式')
      // .eq('laowang1', '验证码填写有误')
      // 同步逻辑判断
      .check('laowang' !== ctx.vals.name, '用户名已存在')
      // 异步逻辑判断
      .check(await hasUser(), '用户名已存在')
      // 如果走到这里校验通过
      // 校验器会用净化后的值填充 `ctx.vals` 对象
      console.log('ctx.vals', ctx.vals)
      next()
  } catch (error) {
    if (error instanceof bouncer.ValidationError) {
      ctx.body = '校验失败：' + error.message
      return
    }
    throw error
  }
}

router.post('/', val, ctx => {
  // const { body: user } = ctx.request
  // 校验器会用净化后的值填充 `ctx.vals` 对象
  const user = ctx.vals
  user.id = users.length + 1
  users.push(user)
  ctx.body = {
    ok: 1,
    user
  }
})

module.exports = router