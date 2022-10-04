const path = require('path');

module.exports = { // node
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'), 
        filename: '[name].js' 
      
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    path.resolve('./my-webpack-loaders.js')
                ]
            },
        ]
    }
}