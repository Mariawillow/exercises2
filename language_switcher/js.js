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
const locale = "da";


document.querySelector(".swiftLanguageEng").addEventListener("click",swift);
document.querySelector(".swiftLanguageDa").addEventListener("click",swift);


function swiftLanguageEng(){
  userChoice = "Engelsk"
  console.log("swiftLang")
}

function swiftLanguageDa(){
  userChoice = "Tysk"
  console.log("swift")
}


