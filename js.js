const container = document.querySelector('#container');

function makeDivRows(numDiv) {
    for (let d = 0; d < numDiv; d++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let c = 0; c < 16; c++) { 
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

makeDivRows(16); 


// For the first row, the reason why they are all one color with only one mouse is hovering is due to them being the container class and not div 