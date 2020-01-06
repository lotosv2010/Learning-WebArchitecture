const jsonwebtoken = require('jsonwebtoken')
const secret = '123456789'
const opt = {
  secret: 'jwt_secret',
  key: 'user'
}
const user = {
  username: 'robin',
  password: '123456'
}
const token = jsonwebtoken.sign({
  data: user,
  exp: Math.floor(Date.now() / 1000) + 60 * 60
}, secret)

console.log('生成token:', token)

// 解码
console.log('解码:',jsonwebtoken.verify(token, secret, opt))