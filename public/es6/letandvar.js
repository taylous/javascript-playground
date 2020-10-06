/**
 * 1️⃣ let 변수와 this
 *
 *    글로벌 오브젝트에서 let 변수를 this로 참조 불가
 *    ❗ let은 block scope를 가지기 때문
 *    ❕ 초기화 단계에서 var 변수는 undefined, let 변수는 설정하지 않음
 *      값을 가지고 있어야 hoisting 효과 발동
 */

// let, var 예제
var music = "음악";
let sports = "축구";
// 결과: 음악 undefined
console.log(this.music, this.sports);
