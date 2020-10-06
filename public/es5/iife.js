var value = function () {
  return 100;
};
console.log(value());

/**
 * IIFE
 * 그룹핑 연산자 == ex: (1 + 2)
 *
 * 그룹핑 연산자에서 반환된 값이 할당되는 변수를 작성하지 않은 상태
 * 1 + 2 대신에 function() {...} 을 쓴 것
 *
 * 코드로 만든 오브젝트(function)도 메모리에 저장되지 않으며,
 * 실행 결과도 메모리에 저장되지 않습니다.
 *
 * 저장할 필요가 없는 일회성 코드이면서 엔진이 function 키워드를 만나는 시점에
 * 즉시 실행해야 한다면 그룹핑 연산자 안에 표현식으로 작성
 */
var value2 = (function () {
  return 100;
})();

console.log(value2);
