let grid = document.getElementById("grid")

for (var i = 0; i < 256; i++) {
let square = document.createElement("div")
square.style.width = "30px"
square.style.height = "30px"
square.style.border = "1px solid black"
grid.appendChild(square)
}

