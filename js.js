const container = document.querySelector('#container');

function makeDivCells(numCells) {
  const totalArea = 50 * 50 * 256
  const newArea = totalArea / numCells
  const roundedCellSize = Math.round(Math.sqrt(newArea)); 
  const cellStyle = document.querySelector('.cell'); // Select a single cell for reference
    if (cellStyle) {
        cellStyle.style.width = roundedCellSize + 'px'; // Update CSS rule for all .cell elements
        cellStyle.style.height = roundedCellSize + 'px';
    }
  container.innerHTML = '';
  for (let i = 0; i < numCells; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        // You need to understand this after you are finished
        cell.addEventListener("mouseenter", (event) => {
            event.target.style.background = 'green' 
            // event.target.classList.add('green-cell')
            // Potential Future Changes
        });
      });

    container.appendChild(cell);
  }

}

// const cells = document.querySelectorAll('.cell')
// cells.forEach(cell => {
//     // You need to understand this after you are finished
//     cell.addEventListener("mouseenter", (event) => {
//         event.target.style.background = 'green' 
//         // event.target.classList.add('green-cell')
//         // Potential Future Changes
//     });
//   });

  function promptFunction() {
   let userInput = prompt("Change the grid size:");
   return userInput
  }
  const btn = document.querySelector('.changeSize')
  btn.addEventListener('click', () => {
    const newGridSize = promptFunction();
    makeDivCells(newGridSize || 256);
});

document.addEventListener('DOMContentLoaded', () => {
  makeDivCells(256); // Create initial grid
});