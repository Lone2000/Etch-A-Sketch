// Create a webpage with a 16x16 grid of square divs.

// Grab the container
let container = document.querySelector(".container");


// Create div function

// function createDiv(){

//     for(let i =0; i < 16; i++){
//         for(let j =0; j < 16; j++){
//             let div = document.createElement('div');
//             div.classList.add("box");
//             div.textContent = "Grid";
//             container.appendChild(div);
//         }
//     }
// }

function createDiv() {
    
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
        let div = document.createElement('div');
        div.classList.add("box");
        div.textContent = "Grid";
        container.appendChild(div);
      }
    }
  }

createDiv();