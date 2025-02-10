
const theName = 'Peter Heronimous Lind';

const firstName = theName.substring(0,theName.indexOf(" "));
console.log("firstName:", firstName + (" "));

const middleName = theName.substring(theName.indexOf(" ") + 1, theName.lastIndexOf(" "));
console.log("middelName:", middleName + (" "));


const lastName = theName.substring(theName.lastIndexOf(" ") + 1);
console.log("lastName:", lastName + (" "));



console.log(theName.substring(0, 5));
console.log(theName.substring(6, 16));
console.log(theName.substring(17, 21));


