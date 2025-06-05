(function(){
gsap.from(".title>li", {
  y: -100,
  opacity: 0,
  stagger: 0.2,
  delay: 1,
});

//화살표가 위에서 아래로 이동, 1번화살표 실행 후 2번화살표 실행
const tl = gsap.timeline({ repeat: -1 });
tl.to(".arrow > p", {
  y: 10,
  opacity: 1,
  stagger: 0.2,
  duration: 0.2,
  ease: "power2.out",
}).to(
  ".arrow > p",
  {
    y: 20,
    opacity: 0,
    stagger: 0.2,
    duration: 0.2,
  },
  "-=0.2"
);

//about me 텍스트들 사이즈가 안보이다가 항목이 보이면 커지면서 보이도록

const $aboutMsg = document.querySelectorAll(".about-wrap>.info > p");
$aboutMsg.forEach((msg) => {
  gsap.from(msg, {
    opacity: 0,
    scale: 0.4,
    duration: 1,
    scrollTrigger: {
      trigger: msg,
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  });
});

//keyword 부분이 가로로 왔다가 갔다 실행
const $keywordList = document.querySelectorAll(".keyword>li");
/*
$keywordList.forEach((word, idx) => {
  const posX = (idx === 1) ? 50 : -50;
  gsap.fromTo(
    word,
    {
      x: posX,
    },
    {
      x: -posX,
      duration: 1,
      delay:idx*0.2,
      repeat: -1,
      yoyo: true,
      ease: "power2.out",
    }
  );
});
*/
const tl2 = gsap.timeline({ repeat: -1, yoyo: true });
tl2.to($keywordList, {
  x: (i) => (i === 1 ? -100 : 100),
  duration: 0.5,
  ease: "sine.inOut",
  stagger: {
    each: 0.2,
  },
});

//project영역의 .item들은 아래에서 올라오면서 보이도록
const $projects = document.querySelectorAll("#projects>.project-wrap");
$projects.forEach((article) => {
  const $item = article.querySelectorAll(".item");
  $item.forEach((item, idx) => {
    gsap.from(item, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    });
  });
});

//skill item 하나씩 나오도록
const $shapes = document.querySelectorAll(".skill-item>li");
gsap.from($shapes, {
  opacity: 0,
  scale: 0.2,
  duration: 0.5,
  stagger: 0.2,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: "#skills",
    start: "top 30%",
    toggleActions: "play reverse play reverse",
  },
});

//footer
gsap.fromTo(
  "footer",
  {
    backgroundColor: "#2957e2",
  },
  {
    backgroundColor: "#eee",
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "footer",
      start: "top 80%",
      end: "bottom bottom",
      scrub: true,
      toggleActions: "play none none none",
    },
  }
);

// const $links = document.querySelectorAll(".link>li");
// gsap.fromTo(
//   $links,
//   {
//     backgroundColor: "#eeeeee",
//     color: "#2957e2",
//     border: "1px solid #2957e2",
//   },
//   {
//     backgroundColor: "#2957e2",
//     color: "#eeeeee",
//     border: "1px solid #2957e2",
//     duration: 0.5,
//     repeat: -1,
//     yoyo: true,
//     ease: "none"
//   }
// );

const $links = document.querySelectorAll(".link>li");
console.log($links);
//첫번째 링크 버튼 애니
gsap.to(".link>li", {
  backgroundColor: (i) => (i === 0 ? "#2957e2" : "#eeeeee"),
  color: (i) => (i === 0 ? "#eeeeee" : "#2957e2"),
  boaderColor: (i) => (i === 0 ? "#2957e2" : "#eeeeee"),
  duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "footer",
      start: "top 50%",
      toggleActions: "play none none none",
    }
});


// gsap.to(".link>li", {
//   backgroundColor: "#eeeeee",
//   color: "#2957e2",
//   borderColor: "#2957e2",
//   duration: 1,
//   repeat: -1,
//   yoyo: true,
//   ease: "power1.inOut",
//   scrollTrigger: {
//     trigger: "footer",
//     start: "top 50%",
//     toggleActions: "play none none none",
//   },
// });

//home 누르면 최상단으로 이동
const $home = document.querySelector("#logo");
$home.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});
})();