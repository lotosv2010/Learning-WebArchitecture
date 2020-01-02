const  express  = require('./index.js')
const fs =require('fs')
const server = express()

server.get('/', (resquest, response) => {
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
})

server.get('/users', (resquest, response) => {
  response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
    response.end(JSON.stringify({
      name: 'robin',
      age: 18
    }))
})

server.listen(3100, function() {
  console.log('server is running')
})