const list = document.querySelector("ul");


const barArray = [];

//Den udføre en fucnktion efter et dellay
// round= at 0 og 100 er inkluderet 
setInterval (generateBars, 100);

function generateBars(){
    const randomNum = Math. round(Math.random() * 100);   
    //ved at benytte push, så fortæller vi at puser et tal ind. 
    barArray.push(randomNum);
    const li = document.createElement("li");
    li.style.setProperty("--height", randomNum);
    list.appendChild(li);
    console.log("generate bars", barArray)
    //vi laver en if med en length for at fortælle at vi kun skal have 20.
    //vi fortæller at når den er nået til 20, begynder den at rykke søjlerne.
    if(list.children.length > 20){
        //Nedenfor benytter vi removeChild, for at fortælle at vi skal fjerne nummer 0 søjle. 
        //Og det er fordi den skal rykke sig, så forsvinder den ud af skærmen. 
        list.removeChild(list.children[0]);
    } 
    //for at lave et flow, hvor den ligger til bagved og fjerne i starten skal.
    //her benytter vi os af shift
}

