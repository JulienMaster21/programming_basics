var allList = document.getElementsByTagName("li");
//console.log(allList);
var list = document.getElementById("list");
//console.log(list);
var firstitem = list.firstElementChild;
//console.log(firstitem);
firstitem.classList.add("firstItem");
var newItem = document.createElement("li");
newItem.innerText = "Krop Sla";
list.appendChild(newItem);
var groceryList = [
    {
        "name": "Tandenborstel",
        "price": 0.99
    },
    {
        "name": "Deodorant",
        "price": 7.99
    },
    {
        "name": "BakMeel",
        "price": 0.79
    },
    {
        "name": "Wortels",
        "price": 2.99
    }
];
function createTable() {
    var table = document.createElement("table");
    groceryList.forEach(function (element) {
        var tr = document.createElement("tr");
        var nameD = document.createElement("td");
        nameD.innerText = element.name;
        var priceD = document.createElement("td");
        priceD.innerText = String(element.price);
        tr.appendChild(nameD);
        tr.appendChild(priceD);
        table.appendChild(tr);
    });
    var body = document.getElementById("body");
    body.appendChild(table);
}
;
createTable();
//Opdracht 1
//Declareer variabelen
var averageValue = 0;
var table = document.getElementById("table");
//Begin een for loop waarin ik de waarde van de tabel neem en die toevoeg aan de averageValue
for (var i = 0; i < table.children[0].children.length; i++) {
    var value = Number(table.children[0].children[i].children[1].innerHTML);
    //console.log(value);
    averageValue += value;
}
//Deel de waarde van averageValue door het aantal element en rond af op 1 decimaal
averageValue = Math.round((averageValue / table.children[0].children.length) * 10) / 10;
//Maak een tabel rij en voeg de waarde van averageValue toe
var averageTr = document.createElement("tr");
var averageDn = document.createElement("td");
averageDn.innerHTML = "Average Value";
var averageDv = document.createElement("td");
averageDv.innerHTML = String(averageValue);
//Voeg de tabelcellen aan de tabelrij en de tabelrij aan de tabel
averageTr.appendChild(averageDn);
averageTr.appendChild(averageDv);
table.appendChild(averageTr);
//Opdracht 2
function colors() {
    //Declareer variabelen
    var list = document.getElementById("courses");
    var colors = ["#ff0000", "#00ff00"];
    //Geef een groene achtergrondkleur aan de even element en geef de rest een rode kleur.
    Array.prototype.forEach.call(list.children, function (e, i) {
        if (i % colors.length == 0) {
            e.style = "background-color : " + colors[0].toString();
        }
        else {
            e.style = "background-color : " + colors[1].toString();
        }
    });
}
colors();
//Opdracht 3
function createImageElement(imageSrcName) {
    //Maak een afbeelding element
    var img = document.createElement("img");
    //Declareer de bron
    img.src = imageSrcName;
    //Voeg afbeelding aan de pagina toe
    document.body.appendChild(img);
}
createImageElement("https://dummyimage.com/600x400/000/fff.jpg");
