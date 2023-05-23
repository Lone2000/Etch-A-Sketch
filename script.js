// Create a webpage with a 16x16 grid of square divs.

// Grab the container
let container = document.querySelector(".container");


// Creating Grid 
function createDiv(gridSize=16) {

    // Clear previous grid
    while (container.firstChild) {
        container.firstChild.remove();
      }
    
      
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
        let div = document.createElement('div');
        div.classList.add("box");
        container.appendChild(div);
      }
    }

    let containerWidth = gridSize * 40; // Can adjust width as needed;
    container.style.containerWidth = `${containerWidth}px`
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  }

createDiv();


// Grid Custom Size
let gridSizeInput = document.querySelector("#gridSizeInput");

gridSizeInput.addEventListener('input', handleGridSizeChange);


function handleGridSizeChange(){
    let gridSize = parseInt(gridSizeInput.value, 10);
    createDiv(gridSize);

    let containerWidth = gridSize * 40; // Can adjust width as needed;
    container.style.containerWidth = `${containerWidth}px`
}



// Hover Additional Class Addition
let boxes = container.querySelectorAll("div.box")


boxes.forEach((box) =>{
  box.addEventListener("mouseover", (event)=>{
    event.target.classList.add("change");
  })
});
