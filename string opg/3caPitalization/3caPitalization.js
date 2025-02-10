//Given a single name string in an unknown case, e.g. “peter” or “PETER” - create a new string with the same name, where the third letter is uppercase, and the rest is lowercase. I.e. “peTer”.

// Hint: use substring, toUpperCase, toLowerCase and simple string concatenation


// Test your code with various crazy combinations of your own name, like “pETer”, “PEter”, “peteR”, “PEtER” and so on.

// Make sure that it also works with longer names. Don't worry about names shorter than 3 characters.

// vi har vores string hvor der står mona i
const str = "MonA";
//kort forklaring til hvorfor vi bruger substring:
//returns the part of this string from the start index up to and excluding the end index.
//Vi fortæller at den skal tage nr 0 (m) og 2(n). 
//Så siger vi at de skal være små, men at str array nr 2 (n), slal være et stort bogsatav. 
//Så vi tager "næsten" hvert bogstav for at lave dem om til de store og små vi ønsker. 
console.log(str.substring(0, 2).toLowerCase() + str[2].toUpperCase() + str.substring(3).toLowerCase());

//Nu tager vi 0 (m), og fortæller at det skal vlre stort, og at resren skal være små bogstaver. 
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