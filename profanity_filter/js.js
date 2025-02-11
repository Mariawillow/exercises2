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

document.querySelector("button").addEventListener("click", skiftOrd);

function skiftOrd() {
    curseWords.forEach((word) => {
        theText = theText.replaceAll(word.bad, word.good);
    })};
    console.log(theText);

document.querySelector("p").textContent = theText;

