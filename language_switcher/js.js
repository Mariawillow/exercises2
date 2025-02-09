"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

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





