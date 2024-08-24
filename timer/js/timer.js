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

function countTimer() {
  if (sec != 0) {
    // '초' 값이 0이 아닐 때 실행할 명령들
    sec--;
    document.querySelector("#display").innerHTML =
      min + "분 " + sec + "초 남았습니다.";
  } else {
    if (min != 0) {
      // (sec=0 이면서) '분' 값이 0이 아닐 때 실행할 명령
      min--; // 1분 줄이고
      sec = 59; // '초' 값을 59초부터 시작
    } else {
      // (sec=0 이면서) '분' 값이 0일 때, 즉 타이머가 끝났을 때 실행할 명령
      clearInterval(timer);
      document.querySelector("#display").innerText = "타이머 종료";
      document.querySelector("#startMin").value = "";
      document.querySelector("#startSec").value = "";
    }
  }
}
