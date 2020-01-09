// docker run -d --name mongo-express -p 8081:8081 --link mongodb:mongo --env ME_CONFIG_MONGODB_ADMINUSERNAME='root' --env ME_CONFIG_MONGODB_ADMINPASSWORD='123456' mongo-express
// docker run -it --restart=always --name mongo-express --link mongodb:mongo -d -p 8081:8081 -e ME_CONFIG_BASICAUTH_USERNAME="" -e ME_CONFIG_BASICAUTH_PASSWORD="" -e ME_CONFIG_MONGODB_ADMINUSERNAME="root" -e ME_CONFIG_MONGODB_ADMINPASSWORD="root" mongo-express
// db.createUser({user:"root",pwd:"123456", roles: [{role:"root",db:"admin"}]})
// https://hub.docker.com/_/mongo-express
(async () => {
  const {MongoClient: MongoDB } = require('mongodb')

  // 0.创建客户端
  const client = new MongoDB(
    'mongodb://root:123456@localhost:27017/',
    {
      useNewUrlParser: true
    }
  )

  // 1.连接数据库(异步)
  let ret = await client.connect()

  // 2.获取数据库
  const db = client.db('learning')

  // 3.获取集合
  const fruits = db.collection('fruits')

  // 4.插入文档(异步)
  ret = await fruits.insertOne({
    name: 'orange',
    price: 20.1,
    json: {
      data: '100kg'
    }
  })

  // 5.更新文档(异步)
  ret = await fruits.updateOne({name: 'apple'}, {$set: {price: 19.8}})
  console.log("更新成功", ret.result)

  // 6.查询文档
  ret = await fruits.find().toArray()
  console.log('查询文档', ret)

  // 7.删除文档
  // ret = await fruits.deleteMany({name: 'banana'})
  // console.log('删除成功', ret.result)

})()