module.exports = function myWebpackLoader (content) {
    // console.log('myWebpackLoader Activated');
    return content.replace('console.log(','alert(');
    // return content;
}