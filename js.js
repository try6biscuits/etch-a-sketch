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
const cells = document.querySelectorAll('.cells');
  const sum = Math.floor(500 / 16); 
  cells.forEach(cell => {
    cell.style.width = sum + 'px';
    cell.style.height = sum + 'px';
  });
  
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
  container.removeEventListener('mouseover', mouseOver);

  let userChoice = parseInt(prompt('Change grid size: '));
  if (isNaN(userChoice) || userChoice <= 0) {
    alert('Error');
    return;
  }

  makeGrid(userChoice, userChoice);

  const cells = document.querySelectorAll('.cells');
  const sum = Math.floor(500 / userChoice); // Calculate after grid creation
  cells.forEach(cell => {
    cell.style.width = sum + 'px';
    cell.style.height = sum + 'px';
  });

  mouseOver();
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', alertFunction);