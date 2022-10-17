const path = require("path");
const webpack = require('webpack');
const childprocess = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
    clean: true,  // 웹팩 5에서는 CleanWebpackPlugin < 별도 필요없음
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]",
          limit: 10000 // 10Kb
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
        Build Date: ${new Date().toLocaleString()}
      `
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: { env: process.env.NODE_ENV === 'development' ? '(개발용)' : '' },
      minify: {
        collapseWhitespace: true, //빈공간제거
        removeComments: true, // 주석제거
      }
    }),
    // new CleanWebpackPlugin(),
    (process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: "[name].css" })]
      : []),
  ]
};
