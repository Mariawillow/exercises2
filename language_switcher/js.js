"use strict";
//Det er de samme inhold objekt, men i forskellige steder. 
const texts = {
  de: {
    //Nedenfor er der array tetxt
    texts: [
      //Nedenfor er der de to objekter
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
        //Nedenfor er der array tetxt
    texts: [
            //Nedenfor er der de to objekter
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// document.querySelector("#select").addEventListener("change", languageChange);
// function languageChange(evt){
//   // console.log(evt.target);
//   locale = document.querySelector("#select").value;
//   console.log("TEXTS", texts[locale].texts);
//   texts[locale].texts.forEach(element => {
//     document.querySelector(element.location).textContent = element.texts;
//   });

// }

// let locale = "da";







document.querySelector(".da").addEventListener("click", visDa);

  function visDa (){
    texts.da.texts.forEach(({ text, location}) =>{
      const element = document.querySelector(location);
      if (element){
        element.textContent = text;
      }
    });
  }


document.querySelector(".de").addEventListener("click", visDe);

function visDe (){
  texts.de.texts.forEach(({ text, location}) =>{
    const element = document.querySelector(location);
    if (element){
      element.textContent = text;
    }
  });
}





