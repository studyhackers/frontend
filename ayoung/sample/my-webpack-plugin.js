class MyWebpackPlugin {
    apply(compiler) {
        // compiler.hooks.done.tap("My Plugin", (stats) => {
        //     console.log("MyPlugin: done"); // 플러그인 동작시 출력
        // });

        // BannerPlugin (내장 플러그인)
        compiler.plugin("emit", (compilation, callback) => { // compilation 객체를 이용해 번들링한 결과인 ./dist/main.js에 접근
            const source = compilation.assets["main.js"].source(); 

            compilation.assets["main.js"].source = () => {
                const banner = [
                    "/**",
                    " * 이것은 BannerPlugin이 처리한 결과입니다.",
                    " * Build Date: 2019-10-10",
                    " */",
                ].join("\n");

                return banner + "\n\n" + source; // ./dist/main.js 상단에 출력됨 
            };
            callback();
        });
    }
}

module.exports = MyWebpackPlugin;




// class MyPlugin { // 웹팩5
//     apply(compiler) {
//         compiler.hooks.done.tap("My Plugin", (stats) => {
//             console.log("MyPlugin worked");
//         });

//         compiler.hooks.emit.tapAsync("My Plugin", (compilation, callback) => {
//             console.log(
//                 "compilation.assets['main.js']",
//                 compilation.assets["main.js"].source()
//             );

//             callback();
//         });
//     }
// }

// module.exports = MyPlugin;