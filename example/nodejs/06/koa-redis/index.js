const Koa = require('koa')
const session = require('koa-session')
const redisStore = require('koa-redis')
const redis = require('redis')
const wrapper = require('co-redis')
const app = new Koa()
const redisClient = redis.createClient(6379, 'localhost')
const client = wrapper(redisClient)

// 情况redis
// redisClient.flushdb()

app.keys = ['name', 'pwd']
app.use(session({
  key: 'name:robin',
  store: redisStore({
    //
    client
  })
}, app))


app.use(ctx => {
  if (ctx.path === '/favicon.ico') return;
  let n = ctx.session.count || 0
  ctx.session.count = ++n
  ctx.body = `第 ${n} 次访问`

  redisClient.keys('*', (error, keys) => {
    console.log('keys:', keys.length)
    keys.forEach(key => {
      redisClient.get(key, (err, val) => {
        console.log('val:', val)
      })
    })
  })
})

app.listen(3100)