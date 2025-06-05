
let currentScript = ''; //현재 읽고 있는 스크립트 저장

//창 사이즈 별 js 파일 가져오기 , 이전 스크립트 제거
const $prev = document.querySelector(`script[data-script]`);
const checkDevice = ()=>{
  const device = window.innerWidth<=768 ? "mobile" : "pc";
  if(currentScript === device){
    return;
  }
  const script = document.createElement("script");
  if($prev){
    $prev.remove();
    location.reload();
  }
  script.src = `./script/${device}.js`;
  script.setAttribute("data-script","true");
  document.body.appendChild(script);
  //현재 상태 업데이트
  currentScript=device;
}

window.addEventListener("load",()=>{
  checkDevice();
  gsap.registerPlugin(ScrollTrigger);
});