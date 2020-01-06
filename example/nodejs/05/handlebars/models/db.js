const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb://root:root@localhost:27017/learning',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const conn = mongoose.connection
conn.on('error', () => console.log('连接数据库失败'))
conn.on('open', () => console.log('连接数据库成功'))