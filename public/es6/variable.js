/**
 * 1️⃣ 변수 구분
 *
 *    - local, global
 *    - 변수를 구분하는 이유? => 기능과 목적이 다르기 때문
 *
 *    ▶ 글로벌 변수의 기능, 목적
 *      1. 다른 js 파일에서 변숫값 공유
 *      2. 파일에서 공통 변수 개념으로 사용
 *      의도는 좋으나 처리 속도가 안좋음
 *
 *    ▶ 로컬 변수의 기능, 목적
 *      1. 빠르게 식별자 해결하기 위해서
 *         가까운 스코프의 변수를 사용하려는 것
 *
 *    ▶ 글로벌 변수 오해
 *
 *      글로벌 오브젝트의 로컬 변수
 *      var value = 100처럼 var 키워드 사용이 정상
 *      하지만 var 키워드를 사용하지 않으면,
 *      글로벌 변수로 간주하는데 이것이 문제
 *
 */

// 글로벌 변수 예제
// 1. var 키워드를 사용하지 않고 value를 글로벌 변수로 선언하고 100 할당
value = 100;
/**
 * 2. point() 함수 안에서 value 변수에 300 할당
 *    value 변수가 local 변수가 아니므로 글로벌 오브젝트의 value에 할당
 * 3. 함수 안에서 global 변수에 값을 설정하는 것은 좋은 모습이 아니다.
 * ❗ local 변수와 global 변수를 구분한 목적을 생각해야 한다.
 *
 * 💡 ES5에서는 이런 경우를 "use strict"를 써서 방지했음
 */
function point() {
  value = 300;
  console.log("함수: ", value);
}
point();

/**
 * 2️⃣ let 변수
 *
 *    1. block 스코프를 가진 변수
 *    2. 변수가 선언된 block이 scope
 *    3. block 안과 밖의 scope가 다름
 *    4. 변수 이름이 같아도 대체되지 않음
 *    5. 값을 할당하지 않고 변수만 선언 가능
 *    6. 초깃값으로 undefined가 할당됨
 *    ❗ 초깃값을 할당하지 않으면 선언되지 않은 것으로 간주
 *
 */
// let 변수 예제1
let sports = "축구";
if (sports) {
  let sports = "농구";
  console.log("in: ", sports);
}
console.log("out: ", sports);
