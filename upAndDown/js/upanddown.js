var count = 0;
var randomNumber = Math.floor(Math.random() * 100) + 1;

function finding() {
  var userNumber = document.querySelector("#try").value;

  if (userNumber >= 1 && userNumber <= 100) {
    console.log(userNumber);
  } else {
    alert("1과 100 사이의 숫자를 입력하세요.");
  }
}
