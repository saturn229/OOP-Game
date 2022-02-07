/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game {
   constructor(){
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   };

   createPhrases(){
     return [
       new Phrase ("Hello there"),
       new Phrase("goodbye now"),
       new Phrase("I love cheese"),
       new Phrase("I like porcupines"), 
       new Phrase("porcupines dont eat cheese")
     ];
   }
   getRandomPhrase(){
     const num = Math.floor(Math.random() * this.phrases.length);
     this.activePhrase = this.phrases[num];
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

        if(image.src.includes("images/liveHeart.png")){
          this.missed += 1;
          if(this.missed > 5 || this.missed === 5){
            this.gameOver(false);
          }
          return image.src = "images/lostHeart.png"
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
      document.getElementById('game-over-message').textContent = "Game Over";
      document.getElementById('overlay').classList.add('lose');
      document.getElementById('overlay').classList.remove('start');
      this.reset();
    } else {
      document.getElementById('game-over-message').textContent = "You Won";
      document.getElementById('overlay').classList.add('win');
      document.getElementById('overlay').classList.remove('start');
      this.reset();
    }
   };

   
   handleInteraction(event){
      if(this.activePhrase.checkLetter(event.textContent) === false){
        event.classList.add("wrong");
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
     const startButton = document.getElementById('btn__reset');
     startButton.textContent = "Play Again";

     const chosenLetters = document.querySelectorAll('.chosen');
     const wrongLetters = document.querySelectorAll('.wrong');

     
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
     const phraseDiv = document.getElementById('phrase');
     const phraseUl = phraseDiv.firstElementChild;
     const phraseLi = phraseUl.getElementsByTagName("li");

     for(let i = 0; i < phraseLi.length; i++){
       phraseLi[i].classList.replace("show", "hide")
       
     }

     this.missed = 0;

     
   }

   
}
