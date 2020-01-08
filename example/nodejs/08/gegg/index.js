const Koa = require('koa')
const app = new Koa()

const { initRouter, initController, initService, loadConfig, loadSchedule } = require('./loader')

class Gegg {
  constructor(config) {
    this.app = new Koa(config)
    // 定时任务
    loadSchedule(this)
    // 先加载配置项
    loadConfig(this)
    this.service = initService(this)
    // 先初始化控制器，路由对它有依赖
    this.controller = initController(this)
    // 将Gegg实例传进去
    this.router = initRouter(this)
    this.app.use(this.router.routes())
  }

  start(port, cb) {
    this.app.listen(port, cb)
  }
}

module.exports = Gegg