// 入口文件配置
require.config({
  // baseUrl: '',
  // paths: 用来配置一些常用的文件、文件夹路径
  paths: {
    // 以后所有模块调用都通过jquery短名称
    // 不是所有的模块都配置到这里，一般来说常用的才配置在这里
    jquery: '../../lib/jquery-3.4.1'
  },
  // shim: {}
})

require(['jquery'], function($) {
  console.log('main');
  $('body').append('<div>abc</div>')
})

// 使用paths的原因？解释：
// require(['juqery'], function($) {})
// 1.为什么每个模块都到jquery，都需要引用jquery模块
// ---> 为了防止全局变量污染: $
// ---> 使用AMD的方式每个模块导入一下，$就是一个局部变量了
// 2.我们要使用paths配置jquery，为什么？
// ---> jquery版本升级？3.3.0 --> 3.4.0，会导致牵一发而动全身的修改
//    ---> define(['juqery-3.4.0'])
//    ---> define(['juqery-3.4.0'])
//    ---> define(['juqery-3.4.0'])
// ---> 以后代码结构、文件结构、项目结构进行了优化，其他模块引用的jquery又导致了牵一发而动全身的效果