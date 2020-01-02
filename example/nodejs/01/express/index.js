const http = require('http')
const url = require('url')

let router = []

class Application {
  get(path, handler) {
    router.push({
      path,
      method: 'get',
      handler
    })
  }
  listen() {
    const server = http.createServer((request, response) => {
      const { pathname } = url.parse(request.url, true)
      console.log(pathname, router)
      return router.find(route => pathname === route.path && request.method.toLocaleLowerCase() === route.method).handler(request, response)
    })
    server.listen(...arguments)
  }
}

module.exports = function createAppliction() {
  return new Application()
}