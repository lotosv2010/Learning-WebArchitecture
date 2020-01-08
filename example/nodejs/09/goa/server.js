const http = require('http')
const request = require('./request')
const response = require('./response')
const context = require('./context')

class Goa {
  // 初始化中间件数组
  constructor() {
    this.middlewares = []
  }

  listen(...args) {
    const server = http.createServer(async (request, response) => {
      // 创建上下⽂
      let ctx = this.createContext(request, response)

      // 中间件合成
      const fn = this.compose(this.middlewares)

      // 执行合成函数并传⼊上下⽂
      await fn(ctx)

      // this.callback(ctx)

      // 响应
      response.end(ctx.body)
    })
    server.listen(...args)
  }

  // use(callback) {
  //   this.callback = callback
  // }

  use(middleware) {
    // 将中间件加到数组里
    this.middlewares.push(middleware)
  }

  // 合成函数
  compose(middlewares) {
    // 传⼊上下⽂
    return function(ctx) {
      return dispatch(0)
      // 执⾏第0个
      function dispatch(i) {
        let fn = middlewares[i]
        if (!fn) {
          return Promise.resolve()
        }
        return Promise.resolve(
          // 将上下⽂传⼊中间件，mid(ctx,next)
          fn(ctx, function next() {
            // promise完成后，再执行下⼀个
            return dispatch(i + 1)
          })
        )
      }
    }
  }

  // 构建上下⽂文, 把res和req都挂载到ctx之上
  // 并且在ctx.req和ctx.request.req同时保存
  createContext(req, res) {
    // console.log(req, res)
    const ctx = Object.create(context)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)

    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.req = res

    // console.log(ctx.url, ctx.request.url, ctx.response.body ,ctx.body)
    return ctx
  }
}

module.exports = Goa