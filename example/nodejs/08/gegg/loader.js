const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const Sequelize = require('sequelize')
const schedule = require('node-schedule')

// 读取指定目录下文件
function load(dir, cb) {
  const url = path.resolve(__dirname, dir)
  const files = fs.readdirSync(url)
  // console.log(files)
  files.forEach(file => {
    const filename = file.replace('.js', '')
    const fileContent = require(`${url}/${filename}`)
    cb(filename, fileContent)
  })
}

function initRouter(app) {
  const router = new Router()
  load('app/routes', (filename, routes) => {
    // console.log(filename, routes)
    const prefix = filename === 'index' ? '' : `/${filename}`
    // 判断路由类型，若为函数需传递app进去
    // console.log(routes , typeof routes)
    routes = typeof routes == 'function' ? routes(app) : routes
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ')
      console.log(`正在映射地址:${method.toLocaleUpperCase()} ${prefix}${path}`)
      // 挂载和使用service
      router[method](`${prefix}${path}`, async ctx => {
        app.ctx = ctx
        await routes[key](app)
      })
    })
  })
  return router
}

function initController() {
  const controllers = {}
  // 读取控制器目录
  load('app/controller', (filename, controller) => {
    // 添加路由
    controllers[filename] = controller
  })
  return controllers
}


function initService(app) {
  const services = {}
  // 读取控制器目录
  load('app/service', (filename, service) => {
    services[filename] = service(app)
  })
  return services
}


function loadConfig(app) {
  load('config', (filename, config) => {
    // 如果有middleware选项，则按其规定循序应用中间件
    if (config.middleware) {
      config.middleware.forEach(mid => {
        const midpath = path.resolve(__dirname, 'middleware', mid)
        app.app.use(require(midpath))
      })
    }
    if (config.db) {
      app.db = new Sequelize(config.db)
      // 加载模型
      initModel(app)
    }
  })
}

function initModel(app) {
  // 加载模型
  app.model = {}
  load('app/model', (filename, { schema, options }) => {
    app.model[filename] = app.db.define(filename, schema, options)
  })
  // 同步
  app.db.sync()
}


function loadSchedule(app) {
  // 读取控制器目录
  load('schedule', (filename, scheduleConfig) => {
    const handler = () => {
      scheduleConfig.handler(app)
    }
    schedule.scheduleJob(scheduleConfig.interval, handler)
  })
}

module.exports = { initRouter, initController, initService, loadConfig, loadSchedule }