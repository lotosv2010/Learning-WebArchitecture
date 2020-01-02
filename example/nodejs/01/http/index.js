const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  const { url, method, headers } = request
  if(url === '/' && method === 'GET') {
    fs.readFile('index.html', (error, data) => {
      if (error) {
        response.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8'
        })
        response.end('服务器错误')
      }
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html')
      response.end(data)
    })
  } else if(url === '/users' && method === 'GET') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
    response.end(JSON.stringify({
      name: 'robin'
    }))
  } else if(/(.png$)|(.jpg$)/.test(url)) {
    fs.createReadStream('.' + url).pipe(response)
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/plain;charset=utf-8')
    response.end('No Page 页面不存在')
  }
})
server.listen(3100)