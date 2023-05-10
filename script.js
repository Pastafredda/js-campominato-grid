// Cliccando su play facciamo diventare visibile la griglia
const play =document.getElementById("play");
const grid = document.querySelector(".grid");

play.addEventListener('click',
    function(){
        grid.classList.add('active');
    }
)

// Creiamo 100 quadratini da aggiungere a grid
for(let i= 0; i < 100; i++){
    
    // Aggiungiamo i quadratini a grid
    const square =`<div class="square"></div>`;
    grid.innerHTML += square;
    
}