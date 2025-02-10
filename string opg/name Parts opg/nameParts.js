
const theName = 'Peter Heronimous Lind';

//Substring betyder: //returns the part of this string from the start index up to and excluding the end index.


//Vi tager og laver enkonstant variabel, som indeholder nr 0 (peter)
const firstName = theName.substring(0,theName.indexOf(" "));
console.log("firstName:", firstName + (" "));


//Vi tager og laver enkonstant variabel, som indeholder nr + 1 (Heronimous)
const middleName = theName.substring(theName.indexOf(" ") + 1, theName.lastIndexOf(" "));
console.log("middelName:", middleName + (" "));


//Vi tager og laver en konstant variabel, som indeholder lastIndexOf. og det er  (Lind)
//Der står + 1, som betyder vi geren vil have mnellemrum til sidst. 
const lastName = theName.substring(theName.lastIndexOf(" ") + 1);
console.log("lastName:", lastName + (" "));



console.log(theName.substring(0, 5));
console.log(theName.substring(6, 16));
console.log(theName.substring(17, 21));


