//Grid

// Create a div, add it to the html body
// Div is divided into 16 pieces horizontally and vertically


// Step 1: Grid Container
const containerG = document.querySelector(".containergrid");


// Step 2: Create Div's
function createDiv(rows, cols){

    for(let i=0;i<=rows;i++){
        for(let i=0;i<=cols -1 ;i++){
            const div = document.createElement('div');
            div.classList.add('square')
            // appends the grid col/row into the container
            containerG.appendChild(div);
        }
    }

}

createDiv(16,16);