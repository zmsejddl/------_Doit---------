var sUnit = document.querySelector("#s-unit"); // 왼쪽 필드의 단위.
var tUnit = document.querySelector("#t-unit"); // 오른쪽 필드의 단위.
var cTof = true; // 섭씨에서 화씨로 변환 (Celsius To Fahrenheit)

var source = document.querySelector("#s-value"); // 왼쪽 텍스트 필드
var target = document.querySelector("#t-value"); // 오른쪽 텍스트 필드

function exUnit() {
  source.value = ""; // 왼쪽 텍스트 필드 값 지움
  target.value = ""; // 오른쪽 텍스트 필드 값 지움

  if (cTof) {
    // 현재 '섭씨'에서 '화씨'로 변환 상태라면
    cTof = false; // '화씨'에서 '섭씨' 변환 상태로 바꿈
    sUnit.innerHTML = "&#8457;"; // 왼쪽 단위 필드에 화씨 기호
    tUnit.innerHTML = "&#8451;"; // 오른쪽 단위 필드에 섭씨 기호
  } else {
    // 현재 '화씨'에서 '섭씨' 변환 상태라면
    cTof = true; // '섭씨'에서 '화씨' 변환 상태로 바꿈
    sUnit.innerHTML = "&#8451;"; // 왼쪽 단위 필드에 섭씨 기호
    tUnit.innerHTML = "&#8457;"; // 오른쪽 단위 필드에 화씨 기호
  }
}

function converter() {
  if (cTof) {
    target.value = source.value * 1.8 + 32; // 섭씨 -> 화씨 계산
  } else {
    target.value = (source.value - 32) / 1.8; // 화씨 -> 섭씨 계산
  }
}
