const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
  const { url, method} = request
  
  if(method === 'GET' && url === '/') {
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
  } else if((method === 'GET' || method === 'POST') && url === '/users') {
    setHeader(response)
    response.end(JSON.stringify({
      name: 'robin',
      age: 18
    }))
  } else if (method == "OPTIONS" && url == "/users") {
    setHeader(response);
    response.end();
  }
}).listen(3100)


function setHeader(response) {
  // 许跨域请求。
  response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
  // 预检请求
  response.setHeader('Access-Control-Allow-Headers', 'X-Token,Content-Type')
  // 携带cookie信息
  response.setHeader('Set-Cookie', 'cookie1=va222;')
  // 预检options中和/users接口中均需添加
  response.setHeader('Access-Control-Allow-Credentials', 'true')
  // 返回数据类型
  response.setHeader('Content-Type', 'application/json')
}