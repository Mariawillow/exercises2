"use strict";

window.addEventListener("DOMContentLoaded", start);

const Animal = {
    name: "-defaulname",
    desc: "-no description",
    type: "-unknonw",
    age: 0
};

const allAnimals =  [
    //{
//     name: "Mandu",
//     desc: "amazing",
//     type: "cat",
//     age: 10
// },
// {
//     name: "Mia",
//     desc: "black", 
//     type: "cat",
//     age: 10
// },
// {
//     name: "Leeloo",
//     desc: "growing",
//     type: "dog",
//     age: 3
// },
// {
//     name: "Toothless",
//     desc: "trained", 
//     type: "dragon",
//     age: 14
// },
// {
//     name: "ScoobyDoo",
//     desc: "wondering",
//     type: "dog",
//     age: 58
// },
// {
//     name: "Horsey",
//     desc: "horsing",
//     type: "horse",
//     age: 10
// }
];

function start( ) {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        //  Create new object 
        const animal = Object.create(Animal);

        //find or extract data from json object
        const fullname = jsonObject.fullname;

        //de forskellige ord bliver sat i variabbler 
        const firstSpace = fullname.indexOf(" ");
        const secondSpace = fullname.indexOf(" ", firstSpace +1);
        const lastSpace = fullname.lastIndexOf(" ");

        const name = fullname.substring(0, firstSpace);
        const desc = fullname.substring(secondSpace +1, lastSpace);
        const type = fullname.substring(lastSpace +1);

        //Jeg skriver _ for at se om der er mellemrum noge steder hvor jeg ikke vil have dem.
        //den viser variablerne for hver sætning 
console.log(`name: _${name}_, desc: _${desc}_, type: _${type}_`);

//put cleand data into newly created object
animal.name = name;
animal.desc = desc;
animal.type = type;
animal.age = jsonObject.age;

allAnimals.push(animal);

        // TODO: MISSING CODE HERE !!!
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
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


