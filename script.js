// Cliccando su play facciamo diventare visibile la griglia
const play =document.getElementById("play");
const grid = document.querySelector(".grid");

play.addEventListener('click',
    function(){
        grid.classList.add('active');
    }
)

for (let i = 1; i < 100 + 1; i++){
    
    const newSquare = createGridSquare("div", "square");
  
    newSquare.addEventListener("click",
        function () {
            newSquare.classList.add("square-green");
            const span = document.createElement("span")
            span.append(i);
            newSquare.append(span);
            console.log(i);
        }
    )

    grid.append(newSquare);


}


function createGridSquare(tagType, classToAdd) {
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd);
    return newElement;
    
}







// // Creiamo 100 quadratini da aggiungere a grid
// for(let i= 0; i < 100; i++){

//     // Aggiungiamo i quadratini a grid
//     const squareGrid = square();
    
//     squareGrid.addEventListener("click",
//         function () {
//             squareGrid.classList.add("square-green");
//         }
//     )

//     grid.innerHTML += squareGrid;

   
// }

// // Creiamo una funzione per inserire la classe square nella griglia
// function square(){
//     const newSquare =`<div class="square"></div>`;
//     return newSquare
// }



