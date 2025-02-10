const theme = document.getElementById("colorSelect");
const body = document.body;


// Event listener der ændrer data-filter attributten
//Henter den nye værdi (value) fra det HTML-element, der udløste eventet (e.target).
//e repræsenterer event-objektet, som indeholder oplysninger om ændringen.
theme.addEventListener("change", (e) => {
    //den nye farve (value/værdi) hentes. 
    const theme = e.target.value;
    //Sætter et data-filters-attribut på body-elementet.
    body.setAttribute("data-filters", theme);
    console.log(body);
  });

// const visLys =
// document.querySelector(".lys").addEventListener("click", visLys);

//   function visLys (){
//     forEach(({ lys, location}) =>{
//       const element = document.querySelector(location);
//       if (element){
//         element.textContent = text;
//       }
//     });
//   }


// document.querySelector(".de").addEventListener("click", visDe);

// function visDe (){
//   texts.de.texts.forEach(({ text, location}) =>{
//     const element = document.querySelector(location);
//     if (element){
//       element.textContent = text;
//     }
//   });
// }
