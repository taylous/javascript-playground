/**
 *  JavaScript Engine이 함수를 해석하는 순서
 *
 *    1. 함수 선언문을 해석한다.
 *        - function [name]() {...} 해당 키워드를 만나면 property 생성
 *    2. 변수
 *        - var title = "책" var 키워드를 만나면 key: undefined 생성
 *    3. 코드실행
 *        - 변수, 함수 표현식의 코드를 해석하고 할당한다.
 *          (여기서 title에 "책"을 할당한다.)
 */
function book() {
  function getBook() {
    return "책1";
  }

  console.log(getBook());
  function getBook() {
    return "책2";
  }
}
// 결과: 같은 이름으로 함수선언문이 두 개 정의되어있는데 마지막에 있는 함수선언문이 저장됨
book();

function book2() {
  var getBook = function () {
    return "책1";
  };

  console.log(getBook());
  var getBook = function () {
    return "책2";
  };
}
/**
 *  결과: 초기화 단계에서 값이 있으면 초기화 하지 않는다. 즉, getBook은 위에서 이미 초기화가 되었기 때문에
 *        아래에서 다시 초기화 하지 않는다. 그래서 "책1" 이 출력 됨.
 */
book2();

function book3() {
  function getBook() {
    return "책1";
  }

  console.log(getBook());
  var getBook = function () {
    return "책2";
  };
}
/**
 *  결과: 초기화 단계에서 값이 있으면 초기화 하지 않는다. 즉, getBook은 위에서 이미 초기화가 되었기 때문에
 *        아래에서 다시 초기화 하지 않는다. 그래서 "책1" 이 출력 됨.
 */
book3();

function book4() {
  var getBook = function () {
    return "책1";
  };

  function getBook() {
    return "책2";
  }
  console.log(getBook());
}
book4();
