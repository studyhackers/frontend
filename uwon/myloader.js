module.exports = function myloader(content) {
    console.log("myloader activated");
    return content.replaceAll('console.log(' , 'alert(')
}