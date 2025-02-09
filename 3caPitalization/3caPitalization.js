

const navn = {
    person: { text: "Peter", location: ".fullName" }
  };
  
  console.log(navn.person.text); 

  const lille = document.querySelector(navn.person.location);

  if (lille) {
    lille.textContent = navn.person.text;
  }

  const peTer = {
    person: { text: "Peter", location: ".fullNameStortT" }
  };
  console.log(peTer.person.text); 

  const index = 2;
  console.log(`bogstav nr.: ${index} er ${peTer.person.text.charAt(index)}`);
    
  console.log(peTer.person.text.charAt(index).toLocaleUpperCase());

  const stort = document.querySelector(peTer.person.location);

  if (stort) {
    stort.textContent = peTer.person.text;
  }