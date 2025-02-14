
const url = `https://kea-alt-del.dk/kata-distortion/`;

function getData() {
    fetch(url)
    .then((res) => res.json())
    .then(visData);
    // .then((queue) => Response.json(){
        
    // })
}

getData();

setInterval (getData, 10000);

function visData(data){
    document.querySelector(".showNumber")
    document.querySelector(".showNumber").textContent = `Se tal: ${data.inQueue}`;
    // console.log(data);
}

