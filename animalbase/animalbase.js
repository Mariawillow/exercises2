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

     //Den tager fat i data.action atrubutterne for det er det de hedder i html. 
     //Der henter den sort
     document.querySelectorAll("[data-action= 'sort']")
     //Her fortælles der at for hvert knap skal den føre til funktionen selectSort ved klik. 
     .forEach(buttons => buttons.addEventListener("click", selectSort));
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

//Så starter selectSort funktionen:
function selectSort(event){
    //Jeg laver en variabel som hedder sortBy, som igen kigger på vores HTML med vores event.
    const sortBy = event.target.dataset.sort;
    const sortDir = event.target.dataset.sortDirection;
//Toggel direction:
//Vi laver en sortering af vores datase direction. 
//Det vil sige at den nu ved at hvis vi klikker på datasæt og den er på desc skal den lave den om til asc. 
//så den ændre (laver modsat rækkefølge - høj til lav og omvendt) på række følgen af dyrene. 
if (sortDir === "asc"){
    event.target.dataset.sortDirection = "desc";
}else {
    event.target.dataset.sortDirection = "asc";
}

    //Vi udskriver det i konsollen, så vi kan se om den tager fat i de rigtige filtreringer. 
    console.log(`User selected ${sortBy} - ${sortDir}`);
    //Til sidst kan vi så koble vores sortList som filtrere dyrene, og sætte dem sammen med sort.
    sortList(sortBy, sortDir);
}


//Vi laver en funktion som skal vise hvad der skal ske,
//alt efter hvad man skriver i konsollen:
function sortList(sortBy, sortDir){
    //Som udgangspunkt skal alle dyr vises 
    let sortedList = allAnimals;
    //Vi laver en variable som fortæøller hvilke rækkefølge de skal komme i: 
    let direction = -1;
if (sortDir === "desc"){
    direction = -1;
}else {direction = 1;
}

    sortedList = sortedList.sort(sortByProterty);
    //funktionen sortByName viser funktionen for rækkefølgen af dyr
    function sortByProterty(animalA, animalB){
        console.log(`${sortBy}`);
             //hvis animalA er mindre en animaxlB betyder alfabetisk.
            //Det vil sige hvis a er før b skal den gå ind i if sætningerne:
        if(animalA[sortBy] < animalB[sortBy]) {
            //Hvis animalA.name er mindre (dvs. kommer før animalB.name i alfabetet), returnerer vi 1.
            //Vi kommer * direction på vores værdier, for at de ved hvad de skal reagere på. 
            return -1 * direction;
        } else {
            return 1 * direction;
        }
    }
    //Hvis sortBy er li name skal den sortete i rækkefølge a-å.
           //Vi fjerne if sætnigerne, for vi vil have dem til at være derhele tiden. 
    // if(sortBy === "name"){
        // sortedList = sortedList.sort(sortByName);

    // } else if (sortBy === "type"){
    //     sortedList = sortedList.sort(sortByType);

    // }
    displayList(sortedList);
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


