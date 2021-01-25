/**
 * 1️⃣ Destructuring
 *
 *    본래의 데이터는 변경하지 않고 분할/분리 하는 것.
 */
let one, two, three;
const list = [1, 2, 3];
// 1. index에 해당하는 변수에 할당
[one, two, three] = list;

console.log(one);
console.log(two);
console.log(three);

// 2. 할당받을 변수가 적은 경우
[one, two] = [10, 20, 30];

console.log(one);
console.log(two);

// 3. 할당받을 변수가 많은 경우
[one, two, three, four] = [10, 20, 30];

console.log(one);
console.log(two);
console.log(three);
console.log(four);

// 4. 배열 차원에 맞추어 분할 할당
[one, two, [three, four]] = [10, 20, [30, 40]];
// 차원을 무시하고 1차원으로 됨
console.log(one);
console.log(two);
console.log(three);
console.log(four);

// 5. 매치되는 index에 변수가 없으면 값을 할당하지 않음
let o, t, h, f;
// 변수가 없는 곳은 건너뜀
[o, , , f] = [10, 20, 30, 40];
// 10 undefined undefined 40
console.log(o);
console.log(t);
console.log(h);
console.log(f);

/**
 * 2️⃣ Object Destructuring
 *
 *    property 이름이 같은 property에 값을 할당
 *    구조를 맞춰주면 된다.
 */
const { temp1, temp2 } = { temp1: 10, temp2: 20 };
console.log(temp1, " ", temp2);

// parameter destructuring
function add({ one, two }) {
  return one + two;
}
console.log(add({ one: 10, two: 20 }));

/**
 * 3️⃣ Object Operation
 *
 *    같은 property 이름 사용 가능 (ES5 에선 안됨)
 */
const item = "world";
const sports = {
  [item]: 100,
  [item + " Cup"]: "월드컵",
  [item + "Sports"]: function () {
    return "스포츠";
  },
};
console.log(sports[item]);
console.log(sports[item + " Cup"]);
console.log(sports["world Cup"]);
console.log(sports[item + "Sports"]());
