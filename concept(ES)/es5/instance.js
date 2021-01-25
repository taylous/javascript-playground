function Book(point) {
  console.log(this);
  console.log("1: ", this.point);
}

function Book2() {
  console.log(this);
  globalTotal = 200;

  return globalTotal;
}

Book.prototype.getPoint = function () {
  this.setPoint();
  console.log(this);
  console.log("2: ", this.point);
};

Book.prototype.setPoint = function () {
  this.point = 100;
};

console.log("Prototype: ", Book.prototype);
var obj = new Book();
obj.getPoint();

console.log(Book2());
console.log(globalTotal);
