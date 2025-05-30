let current = 0;
const $list = document.querySelector(".slider>.list");
const $imgs = document.querySelectorAll(".slider>.list>article");
const $backBtn = document.querySelector(".btn-wrap>.back");
const $nextBtn = document.querySelector(".btn-wrap>.next");
const $menuList = document.querySelectorAll(".menu-wrap > li");
const $clicklist = document.querySelectorAll(".btn-warp>button")
const MAX_LENG = document.querySelector(".list").children.length - 1;

const slideGap = 112; 
const articleWidth = $imgs[0].offsetWidth;
const articleCount = $imgs.length;
const totalWidth = articleCount * articleWidth + (articleCount - 1) * slideGap;
$list.style.width = `${totalWidth}px`;


const getSlideDistance = () => {
  const first = $imgs[0].offsetLeft;
  const second = $imgs[1].offsetLeft;
  return second - first;
};

let IMG_WIDTH = 0;
document.addEventListener("DOMContentLoaded", () => {
  IMG_WIDTH = getSlideDistance(); 
  gsap.set($list, { x: 0 }); 
  $nextBtn.addEventListener("click", () => {
    if (current < MAX_LENG) {
      current++;
      moveToCurrent();
    }
  });

  $backBtn.addEventListener("click", () => {
    if (current > 0) {
      current--;
      moveToCurrent();
    }
  });

  $menuList.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      current = Number(elem.dataset.index) - 1;
      moveToCurrent();
    });
  });
});

const moveToCurrent = () => {
  const sliderWidth = document.querySelector(".slider").offsetWidth;
  const centerOffset = (sliderWidth - articleWidth) / 2;
  const newX = -IMG_WIDTH * current + centerOffset;

  gsap.to($list, {
    x: newX,
    duration: 0.5,
  });
  updateMenuClass();
};

// 메뉴 표시 동기화
const updateMenuClass = () => {
  $menuList.forEach((elem, index) => {
    elem.classList.toggle("active", index === current);
  });
}