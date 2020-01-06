const Koa = require('koa')
const app = new Koa()
const home = require('./home')
const users = require('./users')

app.use(home.routes())
app.use(users.routes())

app.listen(3100)