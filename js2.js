const container = document.getElementById("sketchpad");
const square = document.createElement("div");
const squaresList = container.childNodes;

function createSquares() {
    for (let i = 0; i < 256; i++) {
        square.className = " gridSquare";
        container.append(square.cloneNode(true));
    }
}

createSquares();

function changeColor() {
    this.style.backgroundColor = "yellow";
}

for (let i = 0; i < squaresList.length; i++) {
    squaresList[i].addEventListener("mouseover", changeColor);
}

const scottQuote = document.getElementById("heading2");
scottQuote.textContent = "'Behold the Power of Fart' ~ Michael Scott";

function resetGrid() {
    for (let i = 0; i < squaresList.length; i++) {
        squaresList[i].style.backgroundColor = "gray";
    }
}

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener('click', () => {resetGrid();});