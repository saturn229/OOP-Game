/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 class Phrase {
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
   }

   

   addPhraseToDisplay(){
      const phraseUl = document.getElementsByTagName("ul").firstElementChild;
      const randoPhrase = this.phrase.split("");

      console.log(randoPhrase)
      for(let i = 0; i < this.phrase.length; i++){
        const li = document.createElement("li");
        phraseUl.appendChild(li);
        
      }
   }

   checkLetter(){

   }

   showMatchedLetter(){
     
   }

 }
