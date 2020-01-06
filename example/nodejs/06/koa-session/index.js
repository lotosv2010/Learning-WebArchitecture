const Koa = require('koa')
const session = require('koa-session')
const app = new Koa()

app.keys = ['some secret', 'another secret']

const SESS_CONFIG = {
  key: 'name:robin', // 名
  maxAge: 86400000, // 有效期
  httpOnly: true, // 服务器有效
  signed: true // 签名
}

app.use(session(SESS_CONFIG, app))

app.use(ctx => {
  if (ctx.path === '/favicon.ico') return;
  let n = ctx.session.count || 0
  ctx.session.count = ++n
  ctx.body = `第 ${n} 次访问`
})

app.listen(3100)