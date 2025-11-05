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
        btnElem.innerText = "Off";
    }
    else {
        opacityElem.classList.add("opacita1")
        titleElem.classList.add("lampada-accesa");
        titleElem.src = "./img/yellow_lamp.png"
        btnElem.innerText = "On";
    }
    isLight = !isLight
});