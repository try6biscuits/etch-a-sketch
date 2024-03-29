const container = document.querySelector("#container");
function makeGrid(rows, cols) {
  container.innerHTML = "";
  for (let r = 0; r < rows; r++) {
    const row = document.createElement("div"); // Create a row element
    row.classList.add("rows");
    container.appendChild(row); // Append the row to the container

    for (let c = 0; c < cols; c++) {
      const cell = document.createElement("div"); // Create a cell div
      cell.classList.add("cells");
      row.appendChild(cell); // Append the cell to the current row
    }
  }
}

function defaultGrid() {
  makeGrid(16, 16);
  const cells = document.querySelectorAll(".cells");
  const sum = Math.floor(250 / 16);
  cells.forEach((cell) => {
    cell.style.width = sum + "px";
    cell.style.height = sum + "px";
  });
}
defaultGrid();

let isMouseDown = false;
let colorToUse = "black"; // Default color

function mouseActivator() {
  const cells = document.querySelectorAll(".cells");
  cells.forEach((cell) => {
    cell.addEventListener("mousedown", handleMouseDown);
    cell.addEventListener("mouseup", handleMouseUp);
  });
}

function handleMouseDown(event) {
  isMouseDown = true;
  const clickedCell = event.target;
  container.addEventListener("mousemove", handleDrawing);
}

function handleMouseUp() {
  isMouseDown = false;
  container.removeEventListener("mousemove", handleDrawing);
}

function handleDrawing(event) {
  if (isMouseDown) {
    const currentCell = event.target;
    if (currentCell && currentCell.classList.contains("cells")) {
      currentCell.style.backgroundColor = colorToUse; // Use the selected color
    }
  }
}

mouseActivator();

// Function to change the color to red
function changeColorToRed() {
  colorToUse = "red";
}
function changeColorToGreen() {
  colorToUse = "green";
}
function changeColorToBlue() {
  colorToUse = "blue";
}
function changeColorToBlack() {
  colorToUse = "black";
}

function changeColorToWhite() {
  colorToUse = "white";
}

// Add event listener to the "Change to Red" button
const changeToRedBtn = document.querySelector(".changeToRedBtn");
changeToRedBtn.addEventListener("click", changeColorToRed);

const changeToGreenBtn = document.querySelector(".changeToGreenBtn");
changeToGreenBtn.addEventListener("click", changeColorToGreen);

const changeToBlueBtn = document.querySelector(".changeToBlueBtn");
changeToBlueBtn.addEventListener("click", changeColorToBlue);

const changeToBlackBtn = document.querySelector(".changeToBlackBtn");
changeToBlackBtn.addEventListener("click", changeColorToBlack);

const changeToWhiteBtn = document.querySelector(".eraseButton");
changeToWhiteBtn.addEventListener("click", changeColorToWhite);


const changeGridSize = document.querySelector(".changeGridSize");
changeGridSize.addEventListener("click", alertFunction);

mouseActivator();

function alertFunction() {
  container.removeEventListener("mousemove", handleDrawing);
  let userChoice = parseInt(prompt("Change grid size: "));
  if (isNaN(userChoice) || userChoice <= 0) {
    alert("Error");
    return;
  }

  makeGrid(userChoice, userChoice);

  const cells = document.querySelectorAll(".cells");
  const sum = Math.floor(500 / userChoice); // Calculate after grid creation
  cells.forEach((cell) => {
    cell.style.width = sum + "px";
    cell.style.height = sum + "px";
  });
   mouseActivator();
}

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", resetGrid);

function resetGrid() {
  container.removeEventListener("mousemove", handleDrawing);
  defaultGrid();
  mouseActivator();
}

