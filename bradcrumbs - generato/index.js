
//Her er vores variabler med 3 forskellige elementer indeni. 
const bc = [{ name: "Hvidevarer", link: "/hvidevarer" },{ name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },{ name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },];

//Så kommer vi hidden på vores ul. Så man ikke kan se dem til at starte med. 
document.querySelector("ul").classList.add("hidden");
//Så fortæller vi at når vi klikke rpå kanppen, så skal den starte showBread(vores funktion)
document.querySelector("button").addEventListener("click", showBread);

//Her starter funktionen showBread. 
function showBread (){
    //Den starter med at fortælle at den ved hvert element, der skal den i koncollen vise varenes navne.
    bc.forEach(vare=>{
        console.log("vare",vare.name)
        // console.log("vare",vare.link)
        // console.log("*******")
        //Jeg laver en if-sætning, for den sidste vare, sklulle ikke stå som et link, men kun med navnet. 
        //Jeg fortlæller ved -1 at den skal tage det sedste element, og der skal den kalde på varens navn. 
        if (bc[bc.length - 1].name ===  vare.name) {
            //Her vises at den blot skal kalde på navnet, og ikke vise den som et link
            document.querySelector("ul").innerHTML += `<li>${vare.name}</li>`
            //Så fortæller jeg at hvis det ikke er det sidste elemtn jeg kalder på, så skal resten nedstënde
        } else {
            //Her fortælles at de resterende elementer skal ind i en a href, altså link, og skal vise deres navne, men vises som link. 
            //Jeg kommer &nbsp/ for at fortælle at der skal være mellemrum og en /. 
            document.querySelector("ul").innerHTML += `<li><a href="">${vare.name}</a>&nbsp/</li>`

        }
        
    })

}
// console.log(bc[bc.length - 1].name);



// const arr = ["ræv", "hund", "brjøn", "abe"]
// console.log(arr[arr.length - 1]);


