const backToTop = document.getElementById("backtotop");

window.addEventListener("scroll", () => {
  /**
   * 웹페이지가 수직으로 얼마나 스크롤되었는지를 확인하는 값(픽셀 단위로 반환)
   */
  let pageYOffset = window.pageYOffset;

  if (pageYOffset !== 0) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  if (window.pageYOffset > 0) {
    /**
     *  Smooth 하게 스크롤하기
     */
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
