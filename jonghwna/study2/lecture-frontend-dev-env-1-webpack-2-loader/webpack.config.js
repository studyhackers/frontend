const path = require('path');
const webpack = require('webpack');
const childprocess = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtreactPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.(jpg|png)$/,
        loader:'url-loader',
        options:{
          name:'[name].[ext]?[hash]',
          publicPath:'./dist',
          limit: 10000, //10kb
        }
      },
    ]
  },
  plugins:[
    new webpack.BannerPlugin({
      banner: `
        Build Date: ${new Date().toLocaleString()}
        Author : ${childprocess.execSync('git config user.name')}
      `
    }),
    new webpack.DefinePlugin({
      TWO: '1+1',

    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: true, //빈공간제거
        removeComments: true, // 주석제거
      }
    }),
    new MiniCssExtreactPlugin({filename:'[name].css'})  //env 파일 안만들어서 그냥 씀
  ]
}
