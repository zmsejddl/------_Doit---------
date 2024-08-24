var min, sec; // 전역 변수 선언
var timer; // timer 변수 선언

function startTimer() {
  min = document.querySelector("#startMin").value; // '분' 값 가져옴
  if (min == "") {
    min = 0; // '분' 값이 없다면 0으로 지정
  }
  sec = document.querySelector("#startSec").value; // '분' 값 가져옴
  if (sec == "") {
    sec = 0; // '분' 값이 없다면 0으로 지정
  }
  timer = setInterval(countTimer, 1000); // 1초(1000밀리초)마다 countTimer() 함수 실행
}
