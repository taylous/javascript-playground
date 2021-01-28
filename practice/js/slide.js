const slidePrevList = document.getElementsByClassName("slide-prev");

/**
 *  Slide 왼쪽 버튼 Event
 */
const transformPrev = (event) => {
  const slidePrev = event.target;
  const slideNext = slidePrev.nextElementSibling;

  // ul 태그 선택
  const classList = slidePrev.parentElement.parentElement.nextElementSibling;
  let activeLi = classList.getAttribute("data-position");
  const liList = classList.getElementsByTagName("li");

  /* classList.clientWidth 는 ul 태그의 실질적인 너비
   * liList.length * 260 에서 260 은 각 li 요소의 실질 너비(margin 포함)
   * activeLi 는 data-position 에 있는 현재 위치
   * 즉, liList.length * 260 + Number(activeLi) 는 현재 위치부터 오른쪽으로 나열되야 하는 나머지 카드들의 너비
   */

  /* classList.clientWidth < (liList.length * 260 + Number(activeLi)) 의미는
   * 오른쪽으로 나열될 카드들이 넘친 상태이므로, 왼쪽으로 이동이 가능함
   */
  if (classList.clientWidth < liList.length * 260 + Number(activeLi)) {
    activeLi = Number(activeLi) - 260;

    /* 위치를 왼쪽으로 260 이동 (-260px)
     * 해당 위치는 변경된 activeLi 값이 적용된 liList.length * 260 + Number(activeLi) 값임
     * 이 값보다, classList.clientWidth (ul 태그의 너비)가 크다는 것은
     * 넘치는 li 가 없다는 뜻으로, NEXT 버튼은 활성화되면 안됨
     */
    if (classList.clientWidth > liList.length * 260 + Number(activeLi)) {
      slidePrev.style.color = "#cfd8dc";
      slidePrev.classList.remove("slide-prev-hover");
      slidePrev.removeEventListener("click", transformPrev);
    }
    slideNext.style.color = "#2f3059";
    slideNext.classList.add("slide-next-hover");
    slideNext.addEventListener("click", transformNext);
  }
  classList.style.transition = "transform 1s";
  classList.style.transform = "translateX(" + String(activeLi) + "px)";
  classList.setAttribute("data-position", activeLi);
};

/**
 *  Slide 오른쪽 버튼 Event
 */
const transformNext = (event) => {
  const slideNext = event.target;
  const slidePrev = slideNext.previousElementSibling;

  const classList = slideNext.parentElement.parentElement.nextElementSibling;
  let activeLi = classList.getAttribute("data-position");
  // const liList = classList.getElementsByTagName("li");

  if (Number(activeLi) < 0) {
    activeLi = Number(activeLi) + 260;
    // 왼쪽에 있던 카드가 오른쪽으로 갔다면, 다시 왼쪽으로 갈 수 있으므로 Prev 버튼 활성화
    slidePrev.style.color = "#2f3059";
    slidePrev.classList.add("slide-prev-hover");
    slidePrev.addEventListener("click", transformPrev);
  }
  classList.style.transition = "transform 1s";
  classList.style.transform = "translateX(" + String(activeLi) + "px)";
  classList.setAttribute("data-position", activeLi);
};

/**
 *  Slide Button 이벤트를 설정하는 반복문
 */
for (let i = 0; i < slidePrevList.length; i++) {
  // ul 태그 선택
  let classList = slidePrevList[i].parentElement.parentElement.nextElementSibling;
  let liList = classList.getElementsByTagName("li");

  // card가 ul 태그 너비보다 넘치면, 왼쪽(Prev) 버튼을 활성화하고, 반대면 오른쪽(Next)를 활성화
  if (classList.clientWidth < liList.length * 260) {
    slidePrevList[i].classList.add("slide-prev-hover");
    slidePrevList[i].addEventListener("click", transformPrev);
  } else {
    /**
     *  태그 삭제시, 부모 요소에서 removeChild를 통해 삭제해야 함
     *  따라서,
     *    1. 먼저 부모 요소를 찾아서,
     *    2. 부모 요소의 자식 요소로 있는 Prev와 Next 요소를 삭제함
     */
    const arrowContainer = slidePrevList[i].parentNode; // parentElement로 해도 됨
    arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
    arrowContainer.removeChild(slidePrevList[i]);
  }
}

/**
 * Slide Item Dragging 기능
 *
 *  - mousedown, mousemove, mouseup(dragend) 활용
 */
// 특정 요소를 드래그하다가, 요소 밖에서 드래그를 끝낼 수 있으므로, window에 이벤트를 걸어줌
let touchStartX;
let currentClassList;
let currentImg;
let currentActiveLi;
let nowActiveLi;
let mouseStart;

const processTouchMove = (event) => {
  event.preventDefault();

  let currentX = event.clientX || event.touches[0].screenX;
  nowActiveLi = Number(currentActiveLi) + (Number(currentX) - Number(touchstartX));

  currentClassList.style.transition = "transform 0s linear";
  currentClassList.style.transform = "translateX(" + String(nowActiveLi) + "px)";
};

const processTouchStart = (event) => {
  mouseStart = true;

  // 요소의 고유동작을 정지한다.
  event.preventDefault();
  touchstartX = event.clientX || event.touches[0].screenX;
  currentImg = event.target;

  currentImg.addEventListener("mousemove", processTouchMove);
  currentImg.addEventListener("mouseup", processTouchEnd);

  currentImg.addEventListener("touchmove", processTouchMove);
  currentImg.addEventListener("touchend", processTouchEnd);

  currentClassList = currentImg.parentElement.parentElement;
  currentActiveLi = currentClassList.getAttribute("data-position");
};

const processTouchEnd = (event) => {
  event.preventDefault();

  if (mouseStart) {
    currentImg.removeEventListener("mousemove", processTouchMove);
    currentImg.removeEventListener("mouseup", processTouchEnd);

    currentImg.removeEventListener("touchmove", processTouchMove);
    currentImg.removeEventListener("touchend", processTouchEnd);

    currentClassList.style.transition = "transform 1s ease";
    currentClassList.style.transform = "translateX(0px)";
    currentClassList.setAttribute("data-position", 0);

    // 맨 처음 카드가 맨 앞에 배치된 상태로 화살표 버튼도 초기 상태로 변경
    let eachSlidePrev = currentClassList.previousElementSibling.children[1].children[0];
    let eachSlideNext = currentClassList.previousElementSibling.children[1].children[1];
    let eachLiList = currentClassList.getElementsByTagName("li");

    if (currentClassList.clientWidth < eachLiList.length * 260) {
      eachSlidePrev.style.color = "#2f3059";
      eachSlidePrev.classList.add("slide-prev-hover");
      eachSlidePrev.addEventListener("click", transformPrev);

      eachSlideNext.style.color = "#cfd8dc";
      eachSlideNext.classList.remove("slide-next-hover");
      eachSlideNext.removeEventListener("click", transformNext);
    }
    mouseStart = false;
  }
};

window.addEventListener("dragend", processTouchEnd);
window.addEventListener("mouseup", processTouchEnd);

const classImgLists = document.querySelectorAll("ul li img");
for (let i = 0; i < classImgLists.length; i++) {
  classImgLists[i].addEventListener("mousedown", processTouchStart);
  classImgLists[i].addEventListener("touchstart", processTouchStart);
}
