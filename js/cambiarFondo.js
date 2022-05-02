const a_button_green = document.querySelector("#a_button_green")
const a_button_red = document.querySelector("#a_button_red")
const main = document.querySelector("#main");

a_button_red.addEventListener("click", cambiarRed);
a_button_green.addEventListener("click", cambiarGreen);

function cambiarRed() {
    if (main.className === "white") {
        main.className = "red";
        main.style.background = "url(img/Background_red.png)";
    } else if (main.className === "green") {
        main.className = "red";
        main.style.background = "url(img/Background_red.png)";
    } else {
        main.className = "redReverse";
        setTimeout(() => {
            main.className = "white";
            main.style.background = "";
        }, 1500);
    }
}

function cambiarGreen() {
    if (main.className === "white") {
        main.className = "green";
        main.style.background = "green";
    } else if (main.className === "red") {
        main.className = "green";
        main.style.background = "green";
    } else {
        main.className = "greenReverse";
        setTimeout(() => {
            main.className = "white";
            main.style.background = "";
        }, 1500);
    }
}
