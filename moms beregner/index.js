
//Her vises hvordan man med denne kode kan trække 25% fra. I dette tilfælge snakker vi moms 25%
//Vi kan øndre 400 til hvilket som helst tal vi geren vil have regnet 25% fra. 
beregnProcent(400, 25);

//Nedenfor vises en funktion som har to argumenter: tal og procent. 
//ovenfor fortalte vi hvad arguemnterne var: tal = 400, procent = 25
function beregnProcent(tal, procent) {
    //For at vi får den til at vide det er procent, dividdere vi tallet med 100, og ganget med procentet (25).
    //Vi får skrevet resultet i konsollen. Resultatet af 25% af 400 = 100
    console.log(tal / 100 * procent);
}
//Så hvis vi skulle købe en bluse til 400,- er 100,- af dem moms, da det er 25% af 400,-
