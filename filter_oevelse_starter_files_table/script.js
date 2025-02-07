const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
const alleElDrevneFartoejer = vehicles.filter((vehicles)=>vehicles.isElectric);
const alleFartoejerMedMereEndToSaeder = vehicles.filter((vehicles)=>vehicles.passengers > 2);
const alleFartoejerDerErEjetAfJonas = vehicles.filter((vehicles)=>vehicles.ownedBy === "Jonas" && vehicles.isElectric);
const alleFartoejerDerErEjetAfMereEndEn = vehicles.filter((vehicles)=>vehicles.fuel === "Rugbrød" && vehicles.passengers > 1);


showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    console.log(arr)
    tbodyPointer.innerHTML += `<tr>
  <td>${beautify.type}</td>
  <td>${beautify.fuel}</td>
  <td>${beautify.passengers}</td> 
  <td>${beautify.stops}</td>
  <td>${beautify.ownedBy}</td>
  <td>${beautify.isElectric}</td>
  <td>${beautify.isTandem}</td>
</tr>`;
  });
  // document.querySelector("td").forEach((cell) => {
  //   if (cell.textContent === "undefined") {
  //     cell.textContent = "";
  //   }
  // });

  function beautify(str) {
if (str === undefined){
  str = "-";
  if (str === "X"){
    str = "-";
} return str;
  }
}}


