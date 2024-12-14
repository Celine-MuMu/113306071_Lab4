const drumButtons = document.querySelectorAll(".drum");

// 按鈕
drumButtons.forEach(button => {
  button.addEventListener("click", function () {
    const key = this.innerHTML; 
    playSound(key);
    animateButton(key);
  });
});

// 鍵盤
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase(); // 確保按鍵是小寫
  playSound(key);
  animateButton(key);
});

// 聲音
function playSound(key) {
  let sound;
  switch (key) {
    case "w":
      sound = new Audio("sounds/crash.mp3");
      break;
    case "a":
      sound = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      sound = new Audio("sounds/snare.mp3");
      break;
    case "d":
      sound = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      sound = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      sound = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      sound = new Audio("sounds/tom-4.mp3");
      break;
    default:
      return; 
  }
  sound.play(); 
}

// 動畫
function animateButton(key) {
  const activeButton = document.querySelector(`.${key}`); // 按鍵找按鈕
  if (activeButton) {
    activeButton.classList.add("pressed"); // 添加 "pressed" 類
    setTimeout(() => {
      activeButton.classList.remove("pressed"); // 延遲 100ms 後移除
    }, 100);
  }
}
