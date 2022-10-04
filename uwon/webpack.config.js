const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        main: "./src/app.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve("./dist"),
    },
    module: {
        rules: [{
            test: /\.png$/,
            use: "url-loader",    
            options: {
                publicPath: "./dist/",
                name: "[name].[ext]?[hash]",
                limit: 5000 // 5kb
            }
        }]
    }
}
