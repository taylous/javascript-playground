// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }
// console.log("참조가능? ", i);

let a = 50;
let b = 70;

let closure = (function (k, h) {
  let item = "this is closure";

  console.log(k);
  console.log(h);

  return item;
})(a, b);
console.log(closure);
closure.item = "hi";
console.log(closure);

function test() {
  var hello = "hello";

  return function say() {
    console.log(this);
    console.log(hello + " " + "!!");
  };
}

class MyClass {
  constructor() {
    this.hello = "hello!";
  }
}

let t = new test();
t();

let my = new MyClass();
console.log(my.hello);
