const hbs = require('koa-hbs')
const moment = require('moment')

hbs.registerHelper('date', (data, pattern) => {
  try {
    return moment(data).format(pattern)
  } catch (error) {
    return ''
  }
})