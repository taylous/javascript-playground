/**
 * 1️⃣ Spread & Rest
 *
 *    spread: 분리, rest: 결합
 *
 *    🔸 특징
 *      - arguments: Array-like
 *      - rest parameter: Array
 */

function point(ten, ...rest) {
  console.log(ten);
  console.log(rest);
}
point(...[10, 20, 30]);
point(10, 20, 30);

// Array-like
// 아래의 형식을 지켜야한다.
const values = {
  0: 10,
  1: 20,
  2: 30,
  length: 3,
};

for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}
