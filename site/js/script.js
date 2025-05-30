gsap.registerPlugin(ScrollTrigger);

// header 헤더 영역 애니메이션
const tl = gsap.timeline();
/*
tl.from(".slogan>h2", {
  opacity: 0,
  y: -50,
  duration: 1,
})
  .from(
    ".slogan>h1",
    {
      opacity: 0,
      y: -50,
      duration: 1,
    },
    "-=0.5"
  )
  .from(
    ".slogan>p",
    {
      opacity: 0,
      y: -50,
      duration: 1,
    },
    "-=0.5"
  );
*/
gsap.from(
  ".slogan>h2,.slogan>h1,.slogan>p",
  {
    opacity: 0,
    y: -50,
    duration: 1,
    stagger:0.5
  });


  //section aboutme
  gsap.from("#aboutme",{
    opacity:0,
    y:100,
    // duration: 1,
    scrollTrigger:{
      trigger:"#aboutme",
      start: "top 60%",
      end: "top 30%",
      scrub: true
    }
  })

  //section laster
const $ul = document.querySelector("#laster>ul");
// const dist = $ul.scrollWidth - window.innerWidth;
const dist = $ul.scrollWidth -(window.innerWidth*0.7);

  gsap.to($ul,{
    x:-(dist),
    ease:"none",
    scrollTrigger:{
      trigger:"#laster",
      start:"top top",
      end:"+="+dist,
      pin:true,
      scrub:true
    }
  });


    //section contact
  gsap.from("#contact>.wrapper>.title", {
    opacity: 0.3,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: "#contact",
      start: "top 50%"
    },
  });

