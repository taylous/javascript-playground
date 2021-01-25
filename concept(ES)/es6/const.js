/**
 * 1️⃣ Const
 *
 *    값을 바꿀 수 없는 변수 선언
 *    const로 선언해도 Array, Object 등 값은 바꿀 수 있음
 *
 *    💡 JS에서 상수는 대문자 사용이 관례
 *    💡 타입을 결정할 때 const > let > var 우선순위로 고려해볼 것
 */

const sports = "축구";
const book = ["메밀 꽃 필무렵"];
const obj = { title: "hi" };

try {
  sports = "농구";
  book.push("어린왕자");
  obj.title = "hello";
} catch (e) {
  console.log("const 할당 불가: ", e);
}
console.log(book);
console.log(obj);
