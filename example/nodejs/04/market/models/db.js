const config = require('./config')
const EventEmitter = require('events').EventEmitter

// 客户端
const MongoClient = require('mongodb').MongoClient

class Mongodb {
  constructor(config) {
    // 保存config
    this.config = config
    this.emitter = new EventEmitter()
    // 链接
    this.client = new MongoClient(config.url, {
      useNewUrlParser: true
    })
    this.client.connect(error => {
      if (error) {
        throw error
      }
      console.log('链接成功')
      this.emitter.emit('connect')
    })
  }

  col(colName, dbName = config.dbName) {
    return this.client.db(dbName).collection(colName)
  }

  once(event, cb) {
    this.emitter.once(event, cb)
  }
}

module.exports = new Mongodb(config)