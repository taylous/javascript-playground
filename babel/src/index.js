class Test {
  field = 42;

  printField() {
    console.log(this.field);
  }
}

const instance = new Test();
instance.printField(); // 예상 출력: 42
