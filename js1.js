const container = document.getElementById('sketchpad');
const square = document.createElement('div');
square.setAttribute('style', 'className: gridSquare;');

//I copied the following function from Stack Overflow
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'gridSquare';
    };
};

makeRows(16, 16);