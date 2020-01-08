// module.exports = {
//   'get /': async ctx => {
//     ctx.body = 'user'
//   },
//   'get /info': async ctx => {
//     ctx.body = 'user info'
//   }
// }

// module.exports = app => ({
//   'get /': app.controller.user.index,
//   'get /info': app.controller.user.detail
// })

// module.exports = app => ({
//     'get /': app => {
//       console.log(app.controller.user.index)
//       return app.controller.user.index
//     },
//     'get /info': app => {
//       return app.controller.user.info
//     }
//   })
  

module.exports = app => ({
  'get /': app.controller.user.index,
  'get /info': app.controller.user.info
})