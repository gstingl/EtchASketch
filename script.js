const GRIDSIDE = 600;
let rows = 24;
let cols = 24;

const container = document.querySelector('.container');
container.style.width = `${GRIDSIDE}px`;
container.style.height = `${GRIDSIDE}px`;

const button = document.querySelector('.gridSizeButton');
button.addEventListener('click', function changeGridSize() {
    deleteGrid();
    rows = prompt('Enter a number between 1-50');
    cols = rows;
    if (rows <= 50) {
    createGrid();
    } else {
        alert("Number is to large, please try again");
        changeGridSize();
    }
});

function deleteGrid() {
    let del = document.querySelector('.container');
    del.innerHTML = '';
}

const clearBtn = document.querySelector('.clearGrid');
clearBtn.addEventListener('click', function clearGrid() {
    deleteGrid();
    createGrid();
});

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