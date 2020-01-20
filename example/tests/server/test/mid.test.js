const request = require('supertest')
const assert = require('assert')
const Koa = require('koa')

describe('测试中间件 app.use', () => {
  let app = new Koa()
  app.context.msg = 'koa test'
  it('测试中间件 洋葱圈 中间件执行的逻辑', async () => {
    const calls = []

    app.use(async (ctx, next) => {
      calls.push(1)
      await next()
      calls.push(6)
    })

    app.use(async (ctx, next) => {
      calls.push(2)
      await next()
      calls.push(5)
    })

    app.use(async (ctx, next) => {
      calls.push(3)
      await next()
      calls.push(4)
    })

    await request(app.listen())
      .get('/')
      .expect(404) // 状态吗
    assert.equal(calls.join(','), '1,2,3,4,5,6')
  })
})