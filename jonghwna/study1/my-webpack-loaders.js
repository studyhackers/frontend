module.exports = function myWebpackLoader(content) {
    console.log('myWebpackLoader가 동작함')

    // return content;
    return content.replaceAll('console.log(', 'alert('); 
}