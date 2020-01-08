const moment = require('moment')
module.exports = {
  interval:'*/9 * * * * *',
  async handler(app) {
    console.log('users: ',JSON.stringify(await app.service.user.getName()))
    console.log('定时任务 嘿嘿 每分钟第9秒执行一次'+ moment().format('YYYY-MM-DD HH:mm:ss'))
  }
}