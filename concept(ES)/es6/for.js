/**
 * 1️⃣ For - of
 *
 *    iterable object를 반복함
 *    ❕ for - of는 처음부터 끝까지 무조건 순회한다.
 *
 *    🔸 for - in과의 차이
 *      1. for - in은 열거 가능한 property가 대상 (Object 순회 가능)
 *      2. for - of는 iterable object가 대상
 *      3. for - of는 Object를 순회할 수 없다.
 *
 *      💡 for - of에서 Object를 전개하고 싶으면
 *         Object.keys()로 property 이름을 배열로 만들어서 전개 가능
 */
const list = [1, 2, 3];
for (let value of list) console.log(value);
for (let value of "ABC") console.log(value);

console.log(Number.isNaN("ABC"));
console.log(Number.isNaN(NaN));
console.log(isNaN("ABC"));
console.log(isNaN("DEF"));
