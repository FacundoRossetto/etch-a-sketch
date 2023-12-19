let grid = document.getElementById("grid")
let sizeBtn = document.getElementById("sizeBtn")
let popUp = document.getElementById("pop-up")

for (var i = 0; i < 256; i++) {
let square = document.createElement("div")
square.classList = "paint"
square.style.width = "30px"
square.style.height = "30px"
square.style.border = "1px solid black"
grid.appendChild(square)
}

sizeBtn.addEventListener("click", ()=> {
    popUp.classList.toggle("hidden")
})