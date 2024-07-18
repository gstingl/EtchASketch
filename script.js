const GRIDSIDE = 600;
let rows = 24;
let cols = 24;

const container = document.querySelector('.container');
container.style.width = `${GRIDSIDE}px`;
container.style.height = `${GRIDSIDE}px`;

function changeBackgroundColor () {
    this.style.backgroundColor = "black";
}

function createGrid () {
    for (i = 0; i < (rows * cols); i++) {
        const gridBox = document.createElement('div');

        gridBox.style.width = `${(GRIDSIDE / cols) - 2}px`;
        gridBox.style.height = `${(GRIDSIDE / rows) - 2}px`;
        gridBox.classList.add('cell');

        container.appendChild(gridBox);

        gridBox.addEventListener("mouseover", changeBackgroundColor);
    }
}

createGrid();