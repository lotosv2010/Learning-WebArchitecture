const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  // source-map配置
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'cheap-module-eval-source-map', // development
  // devtool: 'cheap-module-source-map', // production
  module: {
    // 遇到不认识的模块就在这里找loader解决
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          // file-loader就是把模块放在另一个目录
          // loader: 'file-loader',

          // url-loader可以限制模块的体积，根据体积判断是否需要转换成base64
          loader: 'url-loader',
          options: {
            // name是打包前模块名称，ext打包前模块格式
            name: '[name].[ext]',
            outputPath: 'images/',
            limit: 2048 // 2kb
          }
        }
      },
      {
        test: /\.css$/,
        // style-loader
        // use: ['style-loader', 'css-loader'],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
          'postcss-loader'
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "My App",
      filename: "index.html",
      template: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  // devServer
  devServer: {
    contentBase: './dist',
    open: true,
    port: '8088',
    proxy: {
      '/api': 'http://localhost:3100'
    }
  },
}