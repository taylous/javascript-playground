window.onload = function () {
  "use strict";

  debugger;

  function setMain() {
    function one() {
      two();
      console.log(1);
    }

    function two() {
      three();
      console.log(2);
    }

    function three() {
      console.log(3);
    }
  }
  setMain();
};
