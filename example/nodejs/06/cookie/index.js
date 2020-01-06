const http = require('http')
const app = http.createServer((request, response) => {
  if (request.url === '/favicon.ico') {
    return
  } else {
    // 设置cookie
    response.setHeader('Set-Cookie', 'cx=abc')
    // response.getHeader('Set-Cookie')
    const cookie = request.headers.cookie
    response.end(cookie)
  }
})
app.listen(3100)