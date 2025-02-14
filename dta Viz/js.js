const id = "47057";
const url = `https://kea-alt-del.dk/kata-distortion/`;

function getData() {
    fetch(url)
    .then((res) => res.json())
    .then(visData);
}

getData();

setInterval (getData, 10000);

function visData(data){
    console.log(data);
}
