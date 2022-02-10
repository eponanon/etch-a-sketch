const container = document.getElementById("sketchpad");
const square = document.createElement("div");
const squaresList = container.childNodes;

const scottQuote = document.getElementById("heading2");
scottQuote.textContent = "'Behold the Power of Art' ~ Michael Scott";

function createSquares(num) {
    for (let i = 0; i < num; i++) {
        square.className = " gridSquare";
        container.append(square.cloneNode(true));
    }
}

function createSmallSquares(num) {
    for (let i = 0; i < num; i++) {
        square.className = " gridSquareSmall";
        container.append(square.cloneNode(true));
    }
}

function changeColor() {
    this.style.backgroundColor = "black";
}

function addMouseOver() {
    for (let i = 0; i < squaresList.length; i++) {
        squaresList[i].addEventListener("mouseover", changeColor);
    }
}

//reset1 draws and resets a grid with big squares
function reset1(num) {
    container.textContent = "";
    createSquares(num);
    addMouseOver();
}
reset1(256);

//reset2 draws and resets a grid with finer squares
function reset2(num) {
    container.textContent = "";
    createSmallSquares(num);
    addMouseOver();
}

const resetBtn1 = document.getElementById("resetBtn1");
resetBtn1.addEventListener('click', () => {reset1(256);});

const resetBtn2 = document.getElementById("resetBtn2");
resetBtn2.addEventListener('click', () => {reset2(625);});