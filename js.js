const container = document.querySelector("#container");
function makeGrid(rows, cols) {
  for (let r = 0; r < rows; r++) {
    const row = document.createElement('div'); // Create a row element
    container.appendChild(row); // Append the row to the container

    for (let c = 0; c < cols; c++) {
      const cell = document.createElement('div'); // Create a cell div
      row.appendChild(cell); // Append the cell to the current row
    }
  }
}

makeGrid(16, 16);