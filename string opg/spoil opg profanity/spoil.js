let theText = document.querySelector("p").textContent;
console.log(theText);
// // console.log(theText.replaceAll("bad").join("good"));

const splitText = theText.split();
console.log(splitText);

const swift = "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";
console.log(swift.replaceAll('sjovt', 'ikke sjovt'));