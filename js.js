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
function mouseDown() {
   const cells = document.querySelectorAll(".cells");
   cells.forEach((cell) => {
      cell.addEventListener("mousedown", handleMouseDown)
   });
}
function handleMouseDown() {
  isMouseDown = true;
}

function alertFunction() {
  container.removeEventListener("mouseover", mouseOver);
  
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

  mouseOver();
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", alertFunction);

const changeToRedBtn = document.querySelector(".changeToRedBtn");
changeToRedBtn.addEventListener("click", changeToRed);

const changeToGreenBtn = document.querySelector(".changeToGreenBtn");
changeToGreenBtn.addEventListener("click", changeToGreen);

const changeToYellowBtn = document.querySelector(".changeToYellowBtn");
changeToYellowBtn.addEventListener("click", changeToYellow);

const changeToBlackBtn = document.querySelector(".changeToBlackBtn");
changeToBlackBtn.addEventListener("click", changeToBlack);

function changeToRed() {
  const cells = document.querySelectorAll(".cells");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      this.style.backgroundColor = "red";
    });
  });
}
function changeToGreen() {
  const cells = document.querySelectorAll(".cells");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      this.style.backgroundColor = "green";
    });
  });
}

function changeToYellow() {
  const cells = document.querySelectorAll(".cells");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      this.style.backgroundColor = "yellow";
    });
  });
}
function changeToBlack() {
  const cells = document.querySelectorAll(".cells");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      this.style.backgroundColor = "black";
    });
  });
}

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", resetGrid);

function resetGrid() {
  container.removeEventListener("mouseover", mouseOver);
  defaultGrid();
  mouseOver();
}

const eraseButton = document.querySelector(".eraseButton");
eraseButton.addEventListener("click", eraseFunction);

function eraseFunction() {
  const cells = document.querySelectorAll(".cells");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      this.style.backgroundColor = "white";
    });
  });
}
