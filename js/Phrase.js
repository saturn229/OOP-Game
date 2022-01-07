/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 class Phrase {
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
   }

   

   addPhraseToDisplay(){
      const phraseUl = document.getElementById("phrase").firstElementChild;
      const randoPhrase = this.phrase.split("");

      console.log(this.phrase)
      for(let i = 0; i < this.phrase.length; i++){
        const phraseli = document.createElement("li");
        if (this.phrase[i] === " "){
          phraseli.classList.add("space");
          phraseli.textContent = this.phrase[i];
          phraseUl.appendChild(phraseli);
        } else {
          phraseli.classList.add("hide");
          phraseli.classList.add("letter");
          phraseli.textContent = this.phrase[i];
          phraseUl.appendChild(phraseli);
        }
        
        
      }
   }
   /*checks to see if the letter selected by the player matches a letter in the phrase.*/
   checkLetter(){
    const keyboard = document.getElementsByClassName("key");
    for(let i = 0; i < keyboard.length; i++){
      
      keyboard[i].addEventListener("click", function(){
        console.log(keyboard[i].textContent);
        console.log(this.phrase.includes(keyboard[i].textContent));
      });
      }
    
    
   }

   showMatchedLetter(){
     
   }

 }
