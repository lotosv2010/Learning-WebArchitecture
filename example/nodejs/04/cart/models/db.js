const mongoose = require('mongoose')

// 1.连接
mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb://root:123456@localhost:27017/learning',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const conn = mongoose.connection
conn.on('error', () => console.log('连接数据库失败'))
conn.on('open', () => console.log('连接数据库成功'))