// ES2015 표준 모듈 시스템(export-import)
import * as math from './math.js'; // sum만 가져올거면 import {sum} from '/ayoung/math.js'

console.log(math.sum(1, 2)); // sum함수는 전역에 없기때문에 전역스코프에 있는 math.sum으로 변경 