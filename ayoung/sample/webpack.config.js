const path = require('path');

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
                test: /\.js$/, //.js로 끝나는 모든 파일은 이 로더로 돌리겠다
                use: [
                    path.resolve('./my-webpack-loaders.js')
                ]
            },
        ]
    }
}