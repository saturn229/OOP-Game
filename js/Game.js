/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game {
   constructor(missed, phrases, activePhrase){
     this.missed = 0;
     this.phrases = ["Hello there", "goodbye now", "I love cheese", "I like porcupines", "porcupines dont eat cheese"];
     this.activePhrase = null;
   }
   getRandomPhrase(){
     const num = Math.floor(Math.random() * this.phrases.length);
     this.activePhrase = new Phrase(this.phrases[num]);
     return this.activePhrase;
   }


   startGame(){
     //hides start screen overlay when start game is clicked
     let overlay = document.getElementById("overlay")
     document.getElementById("btn__reset").addEventListener("click", () => overlay.style.display = 'none');

     this.activePhrase = this.getRandomPhrase();
     this.activePhrase.addPhraseToDisplay();
    
     
     
     
    }

   
   handleInteraction(){

   }

   removeLife(){

   }

   checkForWin(){

   }

   gameOver(){

   }
}
