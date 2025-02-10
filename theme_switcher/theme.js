const theme = document.getElementById("colorSelect");
const body = document.body;


// Event listener der ændrer data-theme attributten
theme.addEventListener("change", (e) => {
    const theme = e.target.value;
    body.setAttribute("data-theme", theme);
  });
console.log(theme);

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
