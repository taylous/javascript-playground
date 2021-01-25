/**
 * 1️⃣ Iteration
 *
 *    반복과 유사하지만 for() 문의 반복 개념과는 차이가 있음
 *    iteration은 protocol을 갖고 있으며 이에 따라 수행한다.
 *
 *    ❕ protocol이 구문과 built-in은 아님
 *
 *    🔸 Iteration Protocol
 *      1. object가 iteration 할 수 있는 구조이어야 한다.
 *      2. iteration 함수를 가지고 있어야 한다.
 *
 *      💡 코드로 protocol을 맞추면 iteration 할 수 없는 object도
 *         iteration 할 수 있도록 만들 수 있다.
 */
const list = [10, 20];

for (let value of list) console.log(value);

// iterable protocol
const obj = list[Symbol.iterator]();

// iterator protocol
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());

/**
 * 2️⃣ Iterable Protocol
 *
 *    object가 반복할 수 있는 구조이어야 하며 Symbol.iterator를 갖고 있어야 함.
 *    ex) Array, Argument, String, TypedArray, Map, Set, DOM NodeList...
 *
 *    🔸 Iterable Object
 *
 *        iterable protocol을 갖고 있는 object
 *        반복구조, Symbol.iterator()를 가지고 있어야 함.
 *        자체 object에는 없지만 상속받아서 구현 가능.
 *
 * 3️⃣ Iterator Protocol
 *
 *    값을 순서대로 생성
 *    Symbol.iterator()를 호출하면 iterator object를 생성해서 반환.
 */
