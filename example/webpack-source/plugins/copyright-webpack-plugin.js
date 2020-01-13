class CopyrightWebpackPlugin {
  constructor(options) {
    // console.log(options)
  }

  // compiler:webpack实例例,包含一些配置信息
  apply(compiler) {
    // hooks.emit 定义在某个时刻
    compiler.hooks.emit.tapAsync(
      'CopyrightWebpackPlugin',
      (compilation, cb) => {
        // console.log(compilation.assets)
        compilation.assets['copyright.txt'] = {
          source: function() {
            return 'hello copy'
          },
          size: function() {
            return 20
          }
        }
        cb()
      }
    )

    // 同步的写法
    // compiler.hooks.compile.tap(
    //   'CopyrightWebpackPlugin',
    //   compilation => {
    //     console.log('start')
    //   }
    // )
  }
}

module.exports = CopyrightWebpackPlugin