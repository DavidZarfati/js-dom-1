// console.log("Hello world")
const btnElem = document.querySelector("button")
// console.log(btnElem)
const titleElem = document.querySelector("img")
// console.log(titleElem)
const opacityElem = document.querySelector("div")
// console.log(opacityElem)
let isLight = false

btnElem.addEventListener("click", function () {
    isLight = titleElem.classList.contains("lampada-accesa");
    if (isLight === true) {

        opacityElem.classList.remove("opacita1")
        titleElem.classList.remove("lampada-accesa");
        titleElem.src = "./img/white_lamp.png"
        btnElem.innerText = "Leva accendi luce📍";
    }
    else {
        opacityElem.classList.add("opacita1")
        titleElem.classList.add("lampada-accesa");
        titleElem.src = "./img/yellow_lamp.png"
        btnElem.innerText = "Leva spegni Luce📍";
    }
    isLight = !isLight
});

const btnVibes = document.querySelector(".vibes")
const lampadine = document.querySelectorAll(".giochi-di-luce img")

btnVibes.addEventListener("click", function () {
    lampadine.forEach((lampadina, index) => {
        if (lampadina.classList.contains("lampadina-accesa")) {
            lampadina.classList.remove("lampadina-accesa");
            lampadina.classList.add("lampadina-spenta");
            lampadina.src = "./img/white_lamp.png";
        } else {
            lampadina.classList.remove("lampadina-spenta");
            lampadina.classList.add("lampadina-accesa");
            lampadina.src = "./img/yellow_lamp.png";
        }
    });
});