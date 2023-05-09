//Grid

// Create a div, add it to the html body
// Div is divided into 16 pieces horizontally and vertically


// Step Grid Container
const containerG = document.querySelector(".containergrid");


// Step: Create Div's
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

// Step: Change Color on Hover
function sample(color){
    const gridBlocks = document.querySelectorAll('.square');
    
    gridBlocks.forEach(block => block.addEventListener('mouseover', (e)=>{
        e.target.style.backgroundColor = color;
    }))
}


createDiv(16,16);
sample('red');