const Koa = require('koa')
const app = new Koa()

const mid1 = async (ctx, next) => {
  ctx.body = 'hello'
  console.log('mid1 next pre')
  await next()
  ctx.body = `${ctx.body}!!!`
  console.log('mid1 next next')
}

const mid2 = async (ctx, next) => {
  ctx.typ = 'text/html;charset=utf-8'
  console.log('mid2 next pre')
  await next()
  console.log('mid2 next next')
}

const mid3 = async (ctx, next) => {
  ctx.body = `${ctx.body} koa`
  console.log('mid3 next pre')
  await next()
  console.log('mid3 next next')
}

app.use(mid1)
app.use(mid2)
app.use(mid3)

app.listen(3100)