/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game {
   constructor(missed, phrases, activePhrase){
     this.missed = 0;
     this.phrases = ["Hello there", "goodbye now", "I love cheese", "I like porcupines", "porcupines dont eat cheese"];
     this.activePhrase = null;
   };
   getRandomPhrase(){
     const num = Math.floor(Math.random() * this.phrases.length);
     this.activePhrase = new Phrase(this.phrases[num]);
     return this.activePhrase;
   };


   startGame(){
     //hides start screen overlay when start game is clicked
     let overlay = document.getElementById("overlay")
     document.getElementById("btn__reset").addEventListener("click", () => overlay.style.display = 'none');

     this.activePhrase = this.getRandomPhrase();
     this.activePhrase.addPhraseToDisplay();
     this.activePhrase.checkLetter();
    
     
     
     
    };
    removeLife(){
      const images = document.getElementsByClassName("tries");

      for(let i = 0; i < images.length; i++){
        let image = images[i].firstElementChild;

        if(image.src.includs("images/liveHeart.png")){
          this.missed += 1;
          if(this.missed > 5 || this.missed === 5){
            this.gameOver(false);
          }
          return image.src = "images/lostHeart.ong"
        }
      }


   };

   checkForWin(){
     const letter = document.querySelectorAll(".hide");
     if (letter.length === 0){
       return true;
     } else {
       return false;
     }

   };

   gameOver(gameWon){
    document.getElementById('overlay').style.display = 'block';

    if(gameWon === false){
      document.getElementById('game-over-message').textConent = "Game Over";
      document.getElementById('overlay').classList.add('lose');
      document.getElementById('overlay').classList.remove('start');
      this.reset();
    } else {
      document.getElementById('game-over-message').textConent = "You Won";
      document.getElementById('overlay').classList.add('win');
      document.getElementById('overlay').classList.remove('start');
      this.reset();
    }
   };

   
   handleInteraction(event){
      if(this.activePhrase.checkLetter(event.textContent) === false){
        event.classlist.add("wrong");
        this.removeLife();
        
      } else if (this.activePhrase.checkLetter(event.textContent)){
        event.classList.add("chosen");
        this.activePhrase.showMatchedLetter(event.textContent);
        this.checkForWin();
        if(this.checkForWin() === true){
          this.gameOver(true);
        }
        if(this.missed > 4){
          this.gameOver(false);
        }
      }
      event.disabled = true;
   };

   
   reset(){
     const startButton = document.getElementById('btn_reset');
     startButton.textContent = "Play Again";

     const chosenLetters = doucment.querySelectorAll('.chosen');
     const wrongLetters = document.querySelectorAll('.chosen');

     
     for(let i = 0; i < chosenLetters.length; i++){
       chosenLetters[i].classList.remove('chosen');
       chosenLetters[i].disabled = false;
     }

     for(let i = 0; i < wrongLetters.length; i++){
       wrongLetters[i].classList.remove('wrong');
       wrongLetters[i].disabled = false;
     }

     const hearts = document.querySelectorAll('.tries img');
     for(let i = 0; i < hearts.length; i++){
       hearts[i].src = 'images/liveHeart.png';
     }
   }

   
}
