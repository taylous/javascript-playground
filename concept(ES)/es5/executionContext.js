/**
 * 3. 변수를 초기화 한다. (base: undefined)
 * 4. 함수선언문, 변수 생성까지 완료했다면 코드를 실행한다.
 *    base에 200을 할당한다.
 */
var base = 200;

/**
 * 1. JavaScript Engine이 함수 선언문을 찾는다.
 * 2. 찾았으면 (function getPoint(bonus) {...}) Function Object를 설정하고,
 *    [[Scope]]에 Global Object(window)를 설정한다.
 * 6. getPoint에 대한 Execution Context를 생성/설정하고 함수 내부로 진입한다.
 *    이 때, Lexical Environment Component, Variable Environment Component, ThisBindingComponent를 만들어서
 *    EC에 첨부한다.
 * 7. Environment Record도 생성하여 LEC에 첨부한다.
 * 8. Outer Lexical Environment Record를 생성후 LEC에 첨부하고,
 *    [[Scope]]를 여기에 설정한다. (이렇게 되면 base: 200이 생기게 됨) - 여기까지가 초기화 단계
 * 9. 호출된 parameters 값을 ER에 mapping (bonus: 70)
 * 10. 함수선언문을 찾고 변수를 초기화 한다.
 * 11. 함수(getPoint)안의 내용을 실행한다.
 * 12. return 문을 만나게 되고, 각 변수들의 이름을 scope를 이용하여
 *     Identifier Resolution(식별자 해결)을 한다.
 * @param {Number} bonus 보너스 값
 * @return base, point, bonus 더해서 반환
 */
function getPoint(bonus) {
  var point = 100;
  return point + base + bonus;
}

/**
 * 5. getPoint(70)을 호출한다.
 * 13. 반환된 값을 출력한다.
 */
console.log(getPoint(70));
console.log(getPoint);
