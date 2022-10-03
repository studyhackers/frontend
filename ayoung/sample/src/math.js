// 이전
// var math = math || {};

// (function() {
//     function sum(a, b) {
//         return a+b;
//     }
//     math.sum = sum; // 전역에서 쓸 수 있도록 할당
// })()

// ES2015 표준 모듈 시스템
export function sum(a, b) {
    return a+b;
}