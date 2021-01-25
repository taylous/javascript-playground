/**
 * 1️⃣ Arrow Function
 *
 *    function() {...} 의 축약 형태이지만 고려할 사항도 있음(this 참조가 다름)
 *    Arrow Function은 __proto__, constructor가 없다.
 *    즉 new 연산자를 통해 method를 추가하거나 변수를 만들 수 없다.
 *
 *    🔸 특징
 *      1. prototype이 없으니 가볍다.
 *      2. new 연산자로 인스턴스 생성이 불가능하다.
 *      3. arguments를 사용할 수 없다.
 *      4. method 보다 단독 function으로 사용하는 것이 효율성이 높다.
 *
 *      💡 arguments는 없지만 rest parameter로 대체가능
 */
const add = function (one, two) {
  return one + two;
};

const total = (one, two) => {
  return one + two;
};
// 축약형(한줄 표현만 가능)
const total2 = (one, two) => one + two;
// 파라미터가 하나 일 때 둥근괄호 생략 가능
// const pow = one => one * one;

console.log(add(1, 2));
console.log(total(1, 2));

// arrow function this 예제
const book = {
  point: 500,
  getPoint: function () {
    console.log(this);
    console.log(this.point);
  },
};
book.getPoint();

var point = 100;
const sports = {
  getPoint: () => {
    console.log(this);
    console.log(this.point);
  },
};
sports.getPoint();

/**
 * 2️⃣ Arrow Function과 Instance
 *
 *    인스턴스에서 화살표 함수의 작성 위치에 따라
 *    this가 참조하는 오브젝트가 다르다.
 */
var point = 200;
const Point = function () {
  this.point = 100;
};

/**
 * this는 global object 참조
 */
Point.prototype.getPoint = () => {
  console.log(this.point);
};

/**
 * getPoint2()가 일반 함수이므로
 * this가 생성한 인스턴스를 참조한다. => new Point()
 * 또한, Arrow Function(add)에서도 this가 생성한 인스턴스를 참조한다.
 */
Point.prototype.getPoint2 = function () {
  console.log(this.point);

  const add = () => this.point + 20;
  console.log(add());
};
new Point().getPoint();
new Point().getPoint2();
