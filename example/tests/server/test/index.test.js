const request = require('supertest')
const assert = require('assert')
const Koa = require('koa')

describe('测试koa', () => {
  let app = new Koa()
  app.context.msg = 'koa test'
  it('测试ctx的信息', () => {
    app.use((ctx, next) => {
      assert.equal(ctx.msg, 'koa test')
      ctx.body = 'koa test'
    })
    return request(app.listen())
      .get('/')
      .expect('koa test')
  })
})