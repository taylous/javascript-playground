/**
 * Closure
 *
 *  - function object를 생성할 때
 *    함수가 속한 스코프를 [[Scope]]에 설정하고,
 *
 *  - 함수가 호출되었을 때
 *    [[Scope]]의 프로퍼티를 사용하는 메커니즘
 */
function book(bookParam) {
  var point = 100;

  function getPoint(pointParam) {
    point = point + bookParam + pointParam;
    return point;
  }
  return getPoint;
}
var obj = book(200);
console.log(obj(400));

/**
 * Closure와 무명함수
 *
 *  - 무명 함수가 끝나면 지워진다.
 *  - 따라서 다시 사용하려면 저장이 필요하다.
 *  - 계속 사용하고 싶으면?
 *
 * Closure 활용
 *  - 클로저는 함수 밖 스코프의 변수와 함수를 사용할 수 있다.
 *  - 변수는 외부에서 직접 접근할 수 없으므로 정보보호
 *  - 무명 함수 안에서 클로저의 변수를 가진 함수를 반환하면,
 *    함수의 재사용성과 정보 보호를 할 수 있다.
 */
var book2 = (function () {
  var point = 100;
  function getPoint(param) {
    return point + param;
  }
  return getPoint;
})();
console.log(book2.point);
console.log(book2(200));
