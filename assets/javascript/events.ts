//Opdrachten
//Opdracht 1
//Declareer pancakes
const pancakes : Element = document.getElementById("pancakes");
//Declareer pancakeNum
let pancakeNum : number = 0;
//Declareer de inhoud van pancakes
pancakes.innerHTML = String(`You have number of ${pancakeNum} of pancakes`);
//Declareer currentHeight en currentWidth en zet deze als de afmeting van de knop
let currentHeight : number = 50;
let currentWidth : number = 100;
document.getElementById("button").style.height = `${currentHeight}px`;
document.getElementById("button").style.width = `${currentWidth}px`;
//console.log(currentHeight);
//Style de knop
document.getElementById("button").style.display = "block"
document.getElementById("button").style.margin = "0 auto";
document.getElementById("button").style.color = "#fff2a4";
document.getElementById("button").style.backgroundColor = "#b45326";
document.getElementById("button").style.border = "2px solid #eca24d";
//Declareer de knop en de eventlistener
let button = <HTMLButtonElement>document.getElementById("button");
button.addEventListener("click", clickEventHandler);
function clickEventHandler () {
    //Verhoog pancakeNum bij 1
    pancakeNum += 1;
    //console.log(pancakeNum);
    //Als pancakeNum deelbaar door 10 is dan halen we 10% van de afmetingen van de knop af
    if (pancakeNum % 10 == 0) {
        button.style.height = `${currentHeight *= 0.9}px`;
        button.style.width = `${currentWidth *= 0.9}px`;
        //console.log(button.style.height);
        //button.style.backgroundColor = "red";
    };
    //Update de counter
    pancakes.innerHTML = String(`You have number of ${pancakeNum} of pancakes`);
};
//Opdracht 2
//Declareer de tabel shoppinglist
const shoppinglist : Element = document.createElement("table");
shoppinglist.setAttribute("id","shoppinglist");
//Declareer het totaal van de prijzen
let totalPrice : number = 0;
//Voeg totaalrij toe
const totalTr : Element = document.createElement("tr");
totalTr.setAttribute("id","totalTr");
const totalN : Element = document.createElement("th");
totalN.innerHTML = "Totaal";
const totalV : Element = document.createElement("th");
totalV.innerHTML = `${totalPrice}`;
const totalD : Element = document.createElement("th");
totalTr.appendChild(totalN);
totalTr.appendChild(totalV);
totalTr.appendChild(totalD);
shoppinglist.appendChild(totalTr);
//Voeg lege rij toe
const emptyTr : Element = document.createElement("tr");
const emptyN : Element = document.createElement("td");
emptyN.setAttribute("id","emptyN");
emptyN.innerHTML = "empty";
const emptyV : Element = document.createElement("td");
const emptyD : Element = document.createElement("td");
emptyTr.appendChild(emptyN);
emptyTr.appendChild(emptyV);
emptyTr.appendChild(emptyD);
shoppinglist.appendChild(emptyTr);
//Voeg de headingrij toe
const headTr : Element = document.createElement("tr");
const headN : Element = document.createElement("th");
headN.innerHTML = "Product";
const headV : Element = document.createElement("th");
headV.innerHTML = "Prijs";
const headD : Element = document.createElement("th");
headTr.appendChild(headN);
headTr.appendChild(headV);
headTr.appendChild(headD);
shoppinglist.appendChild(headTr);
//Declareer de submitknop en de eventlistener voor het maken van rijen
const submit : Element = document.getElementById("submit");
submit.addEventListener("click", function (event) {
    //console.log("Hello");
    //Maak de tabel elementen
    const tr : Element = document.createElement("tr");
    const tdN : Element = document.createElement("td");
    tdN.innerHTML = (<HTMLInputElement>document.getElementById("name")).value;
    //console.log(tdN.innerHTML);
    const tdP : Element = document.createElement("td");
    tdP.innerHTML = String(Math.round(Number((<HTMLInputElement>document.getElementById("price")).value)*100)/100);
    //Check of de velden zijn ingevuld
    if (tdN.innerHTML == "" && (tdP.innerHTML == "" || tdP.innerHTML == "0")) {
        document.getElementById("messageName").style.display = "block";
        document.getElementById("messagePrice").style.display = "block";
        document.getElementById("name").style.border = "1px dashed red";
        document.getElementById("price").style.border = "1px dashed red";
    }
    else if (tdN.innerHTML == "") {
        document.getElementById("messagePrice").style.display = "none";
        document.getElementById("messageName").style.display = "block";
        document.getElementById("name").style.border = "1px dashed red";
        document.getElementById("price").style.border = "1px dashed grey";
    }
    else if (tdP.innerHTML == "" || tdP.innerHTML == "0") {
        document.getElementById("messageName").style.display = "none";
        document.getElementById("messagePrice").style.display = "block";
        document.getElementById("name").style.border = "1px dashed grey";
        document.getElementById("price").style.border = "1px dashed red";
    }
    else {
        //Maak de messages weer onzichtbaar
        document.getElementById("messageName").style.display = "none";
        document.getElementById("messagePrice").style.display = "none";
        //Maak de inputs weer grijs
        document.getElementById("name").style.border = "1px dashed grey";
        document.getElementById("price").style.border = "1px dashed grey";
        //Maak de rest van de tabel elementen
        const tdD : Element = document.createElement("td");
        tdD.innerHTML = "Verwijder";
        (<HTMLTableCellElement>tdD).style.color = "#0099FF";
        //Voeg de nieuwe waarde toe aan totalPrice
        totalPrice += Math.round(Number((<HTMLInputElement>document.getElementById("price")).value)*100)/100;
        totalV.innerHTML = `${totalPrice}`;
        totalTr.appendChild(totalV);
        totalTr.appendChild(totalD);
        //Leeg de inputs
        (<HTMLInputElement>document.getElementById("name")).value = "";
        (<HTMLInputElement>document.getElementById("price")).value = "";
        //Declareer de eventlistener voor het verwijderen van rijen
        tdD.addEventListener("click", function (event) {
            //console.log(this.parentElement.children[0]);
            totalPrice -= Math.round(Number(this.parentElement.children[1].innerHTML)*100)/100;
            totalV.innerHTML = `${totalPrice}`;
            totalTr.appendChild(totalV)
            totalTr.appendChild(totalD);
            this.parentElement.remove()
        });
        tr.appendChild(tdN);
        tr.appendChild(tdP);
        tr.appendChild(tdD);
        shoppinglist.appendChild(tr);
    };
});
//Voeg de tabel aan de pagina toe
let body = document.getElementById("body");
body.appendChild(shoppinglist);
//Stijl de input elementen
document.getElementById("name").style.border = "1px dashed grey";
document.getElementById("price").style.border = "1px dashed grey";
document.getElementById("name").style.height = "3em";
document.getElementById("price").style.height = "3em";
document.getElementById("name").style.paddingLeft = "5px";
document.getElementById("price").style.paddingLeft = "5px";
//Stijl add button
document.getElementById("submit").style.backgroundColor = "#0099FF";
document.getElementById("submit").style.color = "white";
document.getElementById("submit").style.padding = "1em";
//Stijl de message tekst
document.getElementById("messageName").style.display = "none";
document.getElementById("messagePrice").style.display = "none";
document.getElementById("messageName").style.textAlign = "center";
document.getElementById("messagePrice").style.textAlign = "center";
document.getElementById("messageName").style.color = "red";
document.getElementById("messagePrice").style.color = "red";
//Stijl de H1, p en form elementen
document.getElementById("titleList").style.textAlign = "center";
document.getElementById("pancakes").style.textAlign = "center";
document.getElementById("input").style.textAlign = "center";
//Stijl de table
document.getElementById("shoppinglist").style.margin = "1em auto";
document.getElementById("shoppinglist").style.width = "80%";
document.getElementById("shoppinglist").style.textAlign = "center";
document.getElementById("shoppinglist").style.borderCollapse = "collapse";
//Stijl de th element
document.getElementById("totalTr").style.borderBottom = "2px solid black"
//Maak de lege regel onzichtbaar
document.getElementById("emptyN").style.visibility = "hidden";