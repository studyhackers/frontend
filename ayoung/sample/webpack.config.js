const path = require('path');
// const MyWebpackPlugin = require("./my-webpack-plugin"); // 웹팩4
// const MyPlugin = require("./my-webpack-plugin"); // 웹팩5
const WebpackShellPluginNext = require('webpack-shell-plugin-next'); // 웹팩5

module.exports = { // node
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'), 
        filename: '[name].js' // [name]자리에 entry의 main. 이것처럼 다른 entry도 가능
        // 결과물 - dist/main.js
    },
    module: {
        rules: [
            {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: "asset", // 40KB(default) 미만은 inline, 이상은 resource로 대처
                parser: {
                dataUrlCondition: {
                    maxSize: 20 * 1024, // 기준을 20KB 로 변경
                    },
                },
            },
        ],
    },
    plugins: 
    // [new MyWebpackPlugin()], // 웹팩4
    // [new MyPlugin()], // 웹팩5
    [
        new WebpackShellPluginNext({ // 웹팩5
            onBuildStart:{
                scripts: [
                    `
                    "/**",
                    " * 이것은 BannerPlugin이 처리한 결과입니다.",
                    " * Build Date: 2019-10-10",
                    " */"
                    `
                ],
                blocking: true,
                parallel: false
            },
            // onBuildEnd:{
            //     scripts: ['npm run yourCommand'],
            //     blocking: false,
            //     parallel: true
            // }
        })
    ],
}