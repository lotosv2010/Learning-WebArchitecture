const webpack = require('webpack')

const devConfig = {
  mode: 'development',
  // source-map配置
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'cheap-module-eval-source-map', // development
  plugins: [
    // HMR 热模块替换
    new webpack.HotModuleReplacementPlugin()
  ],
  // devServer
  devServer: {
    contentBase: './dist',
    open: true,
    port: '8088',
    // HMR 热模块替换
    hot: true,
    // 页面不刷新
    hotOnly: true,
    proxy: {
      '/api': 'http://localhost:3100'
    }
  }
}

module.exports = devConfig