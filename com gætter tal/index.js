"use script";

let min = 0;
let max = 100;
let counter = 0;
let computerGuess;
const feedback = document.querySelector(".feedback");


//Fjerner alt andet end start spil-knappen
document.querySelector(".knapper").classList.add("hidden");
document.querySelector("button").addEventListener("click", startGame);

function startGame() {
    computerGuess = Math.floor((max + min) / 2); // Computeren regner det mest logiske tal ud (runder ned) – tallet midt imellem min & maks.
    document.querySelector("h1").textContent = `Computeren gætter på: ${computerGuess}`;
  
    document.querySelector(".knapper").classList.remove("hidden");

    document.querySelector(".hoej").addEventListener("click", heigh);
    document.querySelector(".lav").addEventListener("click", low);
    document.querySelector(".correct").addEventListener("click", perfect);
}

function newGuess (){
    counter++;
    computerGuess = Math.floor((max + min) / 2); 
    document.querySelector("h1").textContent = `Computeren gætter på: ${computerGuess}`;

}

function heigh () {
    max = computerGuess;
    newGuess();

    
}

function low () {
    min = computerGuess;
    newGuess();

}


function perfect() {
        counter++;
        document.querySelector("h1").textContent = `Du tænkte på ${computerGuess}!!!!`;
        document.querySelector("h2").textContent = `FEDT!!! Computeren brugte ${counter} forsøg på at gætte rigtigt😝`;
        feedback.textContent = "YAYYYY! Du gættede rigtigt!";
        //den laver farven om til grøn
        feedback.style.color = "green";
        //den tilføjer en celebration, som man kan se i CSS hvad er. 
        feedback.className = "celebration";  
        document.querySelector(".start_overskrift").classList.add("hidden");
        document.querySelector(".reset").classList.remove("hidden");

    }   

    function fromTop(){
        startGame();
    }






