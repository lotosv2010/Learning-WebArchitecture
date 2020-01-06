const Router = require('koa-router')
const router = new Router()
router.get('/', async ctx => {
  // 若cookie中存在记录则不再播放，index.js
  ctx.body = 'index'
})
module.exports = router