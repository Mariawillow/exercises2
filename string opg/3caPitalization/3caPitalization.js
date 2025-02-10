//Given a single name string in an unknown case, e.g. “peter” or “PETER” - create a new string with the same name, where the third letter is uppercase, and the rest is lowercase. I.e. “peTer”.

// Hint: use substring, toUpperCase, toLowerCase and simple string concatenation


// Test your code with various crazy combinations of your own name, like “pETer”, “PEter”, “peteR”, “PEtER” and so on.

// Make sure that it also works with longer names. Don't worry about names shorter than 3 characters.

const str = "MonA";
console.log(str.substring(0, 2).toLowerCase() + str[2].toUpperCase() + str.substring(3).toLowerCase());
console.log(str[0].toLocaleUpperCase() + str.substring(1).toLocaleLowerCase());


// const navn = {
//     person: { text: "Peter", location: ".fullName" }
//   };
  
//   console.log(navn.person.text); 

//   const lille = document.querySelector(navn.person.location);

//   if (lille) {
//     lille.textContent = navn.person.text;
//   }

//   const peTer = {
//     person: { text: "Peter", location: ".fullNameStortT" }
//   };
//   console.log(peTer.person.text); 

//   const index = 2;
//   console.log(`bogstav nr.: ${index} er ${peTer.person.text.charAt(index)}`);
    
//   console.log(peTer.person.text.charAt(index).toLocaleUpperCase());

//   const stort = document.querySelector(peTer.person.location);

//   if (stort) {
//     stort.textContent = peTer.person.text;
//   }