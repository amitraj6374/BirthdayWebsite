let popped = 0;

const area = document.getElementById("balloonArea");
const count = document.getElementById("count");

for (let i = 0; i < 9; i++) {

    const balloon = document.createElement("button");

    balloon.innerHTML = "🎈";

    balloon.style.fontSize = "60px";
    balloon.style.margin = "10px";
    balloon.style.border = "none";
    balloon.style.background = "transparent";
    balloon.style.cursor = "pointer";

    balloon.addEventListener("click", function () {

        if (balloon.disabled) {
            return;
        }

        balloon.innerHTML = "💥";

        balloon.disabled = true;

        popped++;

        count.innerHTML = popped + " / 9 Popped";

        if (popped === 9) {

            count.innerHTML =
                "All Balloons Popped ❤️";

            setTimeout(function () {

                window.location.href =
                    "envelope.html";

            }, 1000);
        }

    });

    area.appendChild(balloon);

}