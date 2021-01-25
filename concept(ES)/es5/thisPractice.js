// var book = {
//   value: 100,
//   get: function () {
//     console.log(this);
//     var value = 456;
//     // console.log(this === window);
//     console.log(this.value);
//   },
// };

// var fn = book.get;
// fn();

("use strict");
var value = 100;
function get(param) {
  console.log(this.value);
  return param + this.value;
}

var result = get.call(this, 20);
console.log(result);
