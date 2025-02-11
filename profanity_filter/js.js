const curseWords = [  {    bad: "var",    good: "const",  },  {    bad: "float",    good: "grid",  },  {    bad: "marquee",    good: "just don't",  },];
let theText = document.querySelector("p").textContent;

// console.log(curseWords);
// // console.log(theText.replaceAll("bad").join("good"));

// const splitText = theText.split();
// console.log(splitText);

// const swift = "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";
// console.log(swift.replaceAll('sjovt', 'not'));

// const JoinText = splitText.join(" ");
// console.log(JoinText)
const closeDialog = document.getElementById("closeDialog");


//Vi tager fat i knappen, bå når der klikkes skal funktioen starte:
document.querySelector("button").addEventListener("click", skiftOrd);

//funcktionen starter:
function skiftOrd() {
    //Vi tager curseWords som er de ord der skal udskiftes.
    curseWords.forEach((word) => {
        //Vi laver en funktion som skal tage p 
    let sentence = document.querySelector("p");
    //innerHTML tager vores indhold inde i et element
    sentence.innerHTML = sentence.innerHTML
    //Vi splitter (fjerner) bad ord
       .split(word.bad)
       //Og siger vi skal bruge //Good
        .join(`<span>${word.good}</span>`);
    })
    //
document.querySelector("button").addEventListener("click", alleredeGode);
function alleredeGode(){
    document.querySelector("dialog").showModal();
document;
}
closeDialog.addEventListener("click", () => {
    dialog.close();
});
};
 

