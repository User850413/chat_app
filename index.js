//button.btn 누를 시 .phone__main 가장 아래에 .bubble__me 추가
const btn = document.querySelector("button.btn");
const input = document.querySelector(".main__send input");
const phoneMain = document.querySelector(".main__bubbles");

function addBubble() {
  if (input.value) {
    const newM = document.createElement("div");
    newM.classList.add("bubble__me");
    newM.textContent = input.value;
    input.value = "";
    phoneMain.append(newM);
    phoneMain.scrollTop = phoneMain.scrollHeight;
  }
}
btn.addEventListener("click", addBubble);
input.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    addBubble();
  }
});
