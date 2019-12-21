module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: false,
      theme: false
    }
  },
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
            target: "http://127.0.0.1:3000/", 
            changOrigin: true
        }
      }
      // before(app) {
      //   app.get("/api/login", function(req,res){
      //     const {username, passwd} = req.query
      //     if(username=='kaikeba' && passwd =='123'){
      //       res.json({ code:1,
      //       token:'kaiekbazhenbucuo-'+(new Date().getTime()+1000*60) })
      //     } else { 
      //       res.json({ 
      //         code:0,
      //         message:"用户名或者密码错误"
      //       })
      //     }
      //   })
      //   // 保护接口中间件
      //   function auth(req, res, next) {
      //     if (req.headers.token) {
      //       // 已认证
      //       next()
      //     } else {
      //       // 用户未授权
      //       res.sendStatus(401)
      //     }
      //   }
        
      //   // 获取登录用户信息
      //   app.get("/api/userinfo", auth, function(req, res) {
      //     res.json({ code: 1, data: { name: "tom", age: 20 } });
      //   })
      // }
    }
  }
}
