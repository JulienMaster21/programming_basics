//Workshop
const productList : string[] = [];
productList[0] = "Tandenborstel";
productList[1] = "Deodorant";
productList[2] = "Bakmeel";
productList[3] = "Wortels";
productList[4] = "Tandpasta";
productList[5] = "Krop sla";
productList[6] = "Maggi";
productList[7] = "Croky Chips";
productList[8] = "WC papier";
productList[9] = "Shampoo";
console.table(productList);
productList.pop();
productList.push("Stroopwafels");
console.table(productList);
const productListdyna : string[] = [
    "Tandenborstel",
    "Deodorant",
    "Bakmeel",
    "Wortels",
    "Tandpasta",
    "Krop sla",
    "Maggi",
    "Croky Chips",
    "WC papier",
    "Shampoo"
];
console.table(productListdyna);
productListdyna.forEach(function (elem, index, myArray) {
    console.log("element", elem);
    console.log("index", index);
    console.log("array", myArray);
});
let arraylength : number = productListdyna.length;
for (let i : number = 0; i < arraylength; i++) {
    let arrayelement : string = productListdyna[i];
    console.log(`Op index: ${i} staat element: ${arrayelement}.`);
}
const newProductsArray : string[] = productListdyna.map(function(element, index) {
    let newElement : string = `Product ${index + 1}: ${element}`;
    return newElement;
});
console.table(newProductsArray);

const productPrices : number[] = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];
console.table(productPrices);
const productlength = productPrices.length;
const totalSum = function(productPrices) {
    let totalSum : number = 0;
    for (let n : number = 0; n < productlength; n++) {
    totalSum += productPrices[n];
    };
    return totalSum;
};
console.log(totalSum(productPrices));
const averageSum = function(productPrices) {
    let averageSum : number = 0;
    for (let n : number = 0; n < productlength; n++) {
    averageSum += productPrices[n];
    };
    averageSum /= productlength;
    return averageSum;
};
console.log(averageSum(productPrices));
const highestnumber = productPrices.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(highestnumber);
//Opdracht 1
const lapRounds : number[] = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
//console.log(lapRounds);
let randomVal = function (lapRounds) {
    //generate random number
    let randomNum : number = Math.floor(Math.random() * lapRounds.length);
    //console.log(randomNum);
    //select random value
    randomVal = lapRounds[randomNum];
    return randomVal;
};
console.log(randomVal(lapRounds));
//Opdracht 2
const allMyRecords : string[][] = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];
//console.log(allMyRecords[0], allMyRecords[1]);
allMyRecords.forEach(function(element) {
    element.forEach(function(element) {
        console.log(element);
    });
});
//Opdracht 3
/*De .filter functie werkt beter, omdat je hiervoor alleen een functie met een conditie moet defineren (zie checkLowerThanFour).
Hierdoor hoef je minder te typen en je kan de deze functie hergebruiken voor andere arrays in tegenstelling tot de for loop.
*/
//Zonder filter
const filteredLapRoundsWithForLoop = function () {
    let newArray : number[] = [];
    for (let i : number = 0; i < lapRounds.length; i++) {
 
        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
 }
 console.log(filteredLapRoundsWithForLoop());
 //Met filter
const filteredlapRounds = function(lapRounds) {
    function checkLowerThanFour(lapRounds) {
        return lapRounds < 4;
    }
    return lapRounds.filter(checkLowerThanFour);
}
console.log(filteredlapRounds(lapRounds));