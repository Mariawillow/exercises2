"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0
};

function start( ) {
    console.log("ready");

    // TODO: Add event-listeners to filter and sort buttons

    loadJSON();
    registerButtons();
}

//Jeg laver en funktion som skal reagere på knapperne. 
function registerButtons(){
    //Den tager fat i data.action atrubutterne for det er det de hedder i html
    document.querySelectorAll("[data-action= 'filter']")
    //Her fortælles der at for hvert knap skal den føre til funktionen selectFilter ved klik. 
    .forEach(buttons => buttons.addEventListener("click", selectFilter));
} 


async function loadJSON() {
    const response = await fetch("animals.json");
    const jsonData = await response.json();
    
    // when loaded, prepare data objects
    prepareObjects( jsonData );
}

function prepareObjects( jsonData ) {
    allAnimals = jsonData.map( preapareObject );

    // TODO: This might not be the function we want to call first
    displayList(allAnimals);
}

function preapareObject( jsonObject ) {
    const animal = Object.create(Animal);
    
    const texts = jsonObject.fullname.split(" ");
    animal.name = texts[0];
    animal.desc = texts[2];
    animal.type = texts[3];
    animal.age = jsonObject.age;

    return animal;
}

//Så starter selectFilter funktionen:
function selectFilter(event){
    //Jeg laver en variabel som hedder filter, som igen kigger på vores HTML med vores event.
    const filter = event.target.dataset.filter;
    //Vi udskriver det i konsollen, så vi kan se om den tager fat i de rigtige filtreringer. 
    console.log(`User selected ${filter}`);
    //Til sidst kan vi så koble vores filterList som filtrere dyrene, og sætte dem sammen med filter.
    filterList(filter);
}

//Denne funktion laver en filtrering. 
//Den viser som udgangspunkt det hele, men hvis man skriver enten dog eller cat filtrere den. 
//Det gør den ved hjælp af if sætningerne.
function filterList (filterBy) {
    let filteredList = allAnimals;
    if (filterBy === "cat") {
        //laver en filtreret liste kun af katte:
        filteredList = allAnimals.filter(isCat);
    } else if (filterBy === "dog"){
        //laver en filtreret liste kun af hunde:
       filteredList = allAnimals.filter(isDog);
    }

    displayList(filteredList);
}

//Hernede vises funktone for hvordan vi får den til at vise kun katte eller hunde
//Den siger altså at hvis man skriver cat så skal animal type være li cat.
function isCat(animal){
    return animal.type === "cat";
}

function isDog(animal){
    return animal.type === "dog";
}


//Vi laver en funktion som skal vise hvad der skal ske,
//alt efter hvad man skriver i konsollen:
function sortList(sortBy){
    //Som udgangspunkt skal alle dyr vises 
    let sortedList = allAnimals;

    //Hvis sortBy er li name skal den sortete i rækkefølge a-å.
    if(sortBy === "name"){
        sortedList = sortedList.sort(sortByName);

    } else if (sortBy === "type"){
        sortedList = sortedList.sort(sortByType);

    }
    displayList(sortedList);
}

//funktionen sortByName viser funktionen for rækkefølgen af dyr
function sortByName (animalA, animalB){
    //hvis animalA er mindre en animalB betyder alfabetisk.
    //Det vil sige hvis a er før b skal den gå ind i if sætningerne:
    if(animalA.name < animalB.name){
        //Hvis animalA.name er mindre (dvs. kommer før animalB.name i alfabetet), returnerer vi 1.
        return 1;
    } else {
        return -1;
    }
}

function sortByType (animalA, animalB){
    if(animalA.type < animalB.type){
        return 1;
    } else {
        return -1;
    }

}



function displayList(animals) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    animals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


