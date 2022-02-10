/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();

const startGameBtn = document.querySelector("#btn__reset")
startGameBtn.addEventListener("click",  function() {game.startGame();});


const button = document.getElementsByClassName('key');


for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', event => {
        game.handleInteraction(event.target);
    });
}

