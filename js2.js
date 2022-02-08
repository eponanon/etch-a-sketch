const container = document.getElementById("sketchpad");
const square = document.createElement("div");

function changeColor() {
    square.style.backgroundColor = "pink";
}

function createSquares() {
    square.addEventListener("mouseover", changeColor);
    for (let i = 0; i < 256; i++) {
        square.className = " gridSquare";
        container.append(square.cloneNode(true));
    }
}

createSquares();

const squaresList = container.childNodes;