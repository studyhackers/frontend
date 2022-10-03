module.exports = function myWebpackLoader(content) {
    // console.log('myWebpackLoader가 동작함')

    // return content;
    return content.replaceAll('console.log(', 'alert('); // 그냥 반환하는것이 아니라 console.log를 alert로 변환해서 반환 (후 리빌드 npm run build)
}