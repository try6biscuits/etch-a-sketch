const container = document.querySelector('#container');

function makeDivCells(numCells) {
  for (let i = 0; i < numCells; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
  }
}

makeDivCells(256);