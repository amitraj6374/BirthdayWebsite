const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", function () {
    window.location.href = "balloon.html";
  });
}

for (let i = 0; i < 25; i++) {
  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "%";

  heart.style.animationDuration = 5 + Math.random() * 8 + "s";

  document.body.appendChild(heart);
}
