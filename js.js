const container = document.querySelector('#container');

function makeDivCells(numCells) {
  for (let i = 0; i < numCells; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
  }
}

makeDivCells(256);

const cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    cell.addEventListener("mouseenter", (event) => {
        event.target.style.background = 'green' 
        // event.target.classList.add('green-cell')
        // Potential Future Changes
    });
  });
  