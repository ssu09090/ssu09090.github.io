const $startinput = document.querySelector("#start-word");
const $gameinput = document.querySelector("#in-word");
const $startBtn = document.querySelector(".start>button");
const $startView = document.querySelector("#header");
const $gameView = document.querySelector("#main");
const $backBtn = document.querySelector(".head > button");
const $list = document.querySelector("ul");
const $sendBtn = document.querySelector(".sendmsg");

// 최대 li 개수
const MAX = 8;

// 초과 시 맨 앞 li 제거
const limit = () => {
  if ($list.children.length > MAX) {
        $list.removeChild($list.firstElementChild);
  }
};

// 시작
const fistInputWord = () => {
  const keyword = $startinput.value.trim();
  if (keyword === "") {
    alert("낱말을 입력하세요");
    return;
  }
  $startView.style.display = "none";
  $gameView.style.display = "block";

  // 시작단어를 입력하면 첫번째 li를 만들어서 출력 하고싶어
  // li추가
  const newli = document.createElement("li");
  newli.textContent = keyword;
  $list.appendChild(newli);

  // 최대 개수 제한
  limit();

  $startinput.value = "";
  $gameinput.focus();
};

//시작, 엔터 버튼 누르면 화면 전환
$startBtn.addEventListener("click", fistInputWord);
$startinput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") fistInputWord();
});

//새로운 단어 추가
const inGameword = () => {
  const newWord = $gameinput.value.trim();
  if (!newWord) return;

  //끝말잇기 실패 시
  const last = $list.lastElementChild;
  if (last) {
    const lastword = last.textContent.slice(-1);
    const firstword = newWord[0];
    if (lastword !== firstword) {
      alert(`끝말잇기 실패! '${lastword}'로 시작해야 합니다`);
      $gameinput.value = "";
      return;
    }
  }
  //일치할 때만 li 추가
  const nextli = document.createElement("li");
  nextli.textContent = newWord;
  $list.appendChild(nextli);

  // 최대 개수 제한
  limit();

  $gameinput.value = "";
  $gameinput.focus();
};

//시작, 엔터 버튼 누르면 새 단어 출력
$sendBtn.addEventListener("click", inGameword);
$gameinput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") inGameword();
});

//뒤로가기 버튼 누르면 화면 전환

$backBtn.addEventListener("click", () => {
  window.location.reload();
  $gameView.style.display = "none";
  $startView.style.display = "flex";
});
