const container = document.querySelector('#container');

function makeDivRows(numDiv) {
    for (let d = 0; d < numDiv; d++) {
        let row = document.createElement('div');

        for (let c = 0; c < 16; c++) { 
            let cell = document.createElement('div');
            row.appendChild(cell);
        }
        
        container.appendChild(row);
    }
}

makeDivRows(16); 

