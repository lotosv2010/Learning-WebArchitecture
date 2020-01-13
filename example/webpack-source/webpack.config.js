const path = require('path')
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolveLoader: {
    modules: ['node_modules', './loaders']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          // loader执行顺序,⾃下而上，自右到左
          {
            loader: 'replace-loader-async',
            options: {
              searchValue: '!', 
              replaceValue: 'loader !'
            }
          },
          {
            loader: 'replace-loader',
            options: {
              timer: 0,
              searchValue: 'world', 
              replaceValue: 'webpack !'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyrightWebpackPlugin({
      name: 'robin'
    })
  ]
}