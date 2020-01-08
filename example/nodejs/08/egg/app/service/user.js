'use strict'

const Server = require('egg').Service

class UserService extends Server {
  async getAll() {
    // return [
    //   { name: 'tom' },
    //   { name: 'jerry' }
    // ]
    const { ctx } = this

    ctx.model.User.create({ name: 'tom' })
    return await ctx.model.User.findAll()
  }
}

module.exports = UserService