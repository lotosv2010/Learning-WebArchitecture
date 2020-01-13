const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require("webpack-merge")

const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

const commonConfig = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    // 遇到不认识的模块就在这里找loader解决
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // presets: [
          //   [
          //     '@babel/preset-env',
          //     {
          //       targets: {
          //         edge: '17',
          //         firefox: '60',
          //         chrome: '67',
          //         safari: '11.1'
          //       },
          //       useBuiltIns: 'usage'//按需注⼊入
          //     }
          //   ]
          // ],
          // plugins: [
          //   [
          //     '@babel/plugin-transform-runtime', 
          //     {
          //       'absoluteRuntime': false,
          //       'corejs': 2,
          //       'helpers': true,
          //       'regenerator': true,
          //       'useESModules': false
          //     }
          //   ]
          // ]
        }
      },
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
          // 插件开启时不支持css热更新
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
      title: 'My App',
      filename: 'index.html',
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  // tree Shaking: 摇树
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    }
  }
}

module.exports = (env)=>{
  if(env && env.production){
    return merge(commonConfig,prodConfig)
  }else{
    return merge(commonConfig,devConfig)
  } 
}