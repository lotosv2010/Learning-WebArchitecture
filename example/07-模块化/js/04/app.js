// 入口文件配置
require.config({
  baseUrl: 'js/04/',
  paths: {
    // paths: 用来配置一些常用的文件、文件夹路径
    // 以后所有模块调用都通过jquery短名称
    // 不是所有的模块都配置到这里，一般来说常用的才配置在这里
    charts: '../../charts',
    jquery: '../../lib/jquery-3.4.1'
  },
  // shim: {}
})
require(['jquery', 'user/index', 'charts/index'], function($, user, charts){
  $('body').append('<div>app</div>')
  user.init()
  charts.bar()
})