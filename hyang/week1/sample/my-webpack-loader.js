module.exports = function myWebpackLoader(content) {
  console.log("로더 실행됨");
  return content;
};