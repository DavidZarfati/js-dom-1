// console.log("Hello world")
const btnElem = document.querySelector("button")
// console.log(btnElem)
const titleElem = document.querySelector("img")
console.log(titleElem)
let isLight = false

btnElem.addEventListener("click", function () {
    isLight = btnElem.classList.contains("bg-red");
    if (isLight === true) {
        btnElem.classList.remove("bg-red");
        titleElem.src = "./img/white_lamp.png"
        btnElem.innerText = "prova a cliccarmi di nuovo";
    }
    else {
        btnElem.classList.add("bg-red");
        titleElem.src = "./img/yellow_lamp.png"
        btnElem.innerText = "cliccami,cliccami,cliccami";
    }
    isLight = !isLight
});