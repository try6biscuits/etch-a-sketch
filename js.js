const container = document.querySelector("#container");
function makeGrid(rows, cols) {
  container.innerHTML = '';
  for (let r = 0; r < rows; r++) {
    const row = document.createElement('div'); // Create a row element
    row.classList.add('rows')
    container.appendChild(row); // Append the row to the container

    for (let c = 0; c < cols; c++) {
      const cell = document.createElement('div'); // Create a cell div
      cell.classList.add('cells')
      row.appendChild(cell); // Append the cell to the current row
    }
  }
}
makeGrid(16, 16);

function mouseOver() {
const cells = document.querySelectorAll('.cells');
cells.forEach(cell => {
  cell.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'red'; // Use `this` to refer to the current cell
  });
});
}
mouseOver() 

function alertFunction() {
  let userChoice = parseInt(prompt('Change grid size: ')) 
  if (isNaN(userChoice) || userChoice == '' || userChoice == null || userChoice == undefined) {
    alert('Error')
  }
}
const btn = document.querySelector('.btn')
btn.addEventListener('click', alertFunction);

