
const http = require('http')
const session = {}
http.createServer((request, response) => {
  const sessionKey = 'sid'
  if (request.url === '/favicon.ico') {
    return
  } else {
    const cookie = request.headers.cookie
    if(cookie && cookie.indexOf(sessionKey) > -1) {
      const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`)
      const sid = pattern.exec(cookie)[1]
      console.log('session:', sid, session, session[sid])
      response.end(`come back ${(session[sid] && session[sid]['name']) || ''}`)
    } else {
      const sid = (Math.random() * 999999999999).toFixed()
      response.setHeader('Set-Cookie', `${sessionKey}=${sid}`)
      session[sid] = { name: 'robin' }
      response.end('hello sessin')
    }
  }
}).listen(3100)