// module.exports = {
//   'get /': async ctx => {
//     ctx.body = 'home'
//   },
//   'get /detail': async ctx => {
//     ctx.body = 'home detail'
//   }
// }

module.exports = app => ({
  'get /': app.controller.index.index,
  'get /detail': app.controller.index.detail
})

