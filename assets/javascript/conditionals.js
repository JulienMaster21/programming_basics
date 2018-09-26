//Workshop
var currentAction = "Strings";
// console.log(currentAction);
if (currentAction == "Calculating") {
    var a = 20;
    var b = 10;
    // console.log(a);
    // console.log(b);
    console.log(a + b);
    console.log(a - b);
    console.log(a / b);
    console.log(a * b);
}
else if (currentAction == "Strings") {
    var hello = "Hello";
    console.log(hello);
    console.log(hello.toUpperCase());
    console.log(hello.length);
    console.log(hello.match(/Hell/g));
    console.log(hello.substr(0, 4));
    console.log(hello.charAt(1));
}
else if (currentAction == "Booleans") {
    var grade = 6;
    //console.log(grade);
    if (grade >= 6) {
        console.log("Jij hebt een voldoende");
    }
    else {
        console.log("Jij hebt een onvoldoende");
    }
}
else {
    console.log("Invalid input");
}
var gewicht = 95;
var lengte = 1.88;
// console.log(gewicht);
// console.log(lengte);
var bmi = gewicht / Math.pow(lengte, 2);
// console.log(bmi);
if (bmi >= 30) {
    console.log("Classificatie: Obesitas Risico: duidelijk verhoogd");
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Classificatie: Overgewicht Risico: verhoogd");
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Classificatie: normaal gewicht Risico: gemiddeld");
}
else {
    console.log("Classificatie: ondergewicht Risico: laag (maar verhoogd risico op andere aandoeningen)");
}
//Begin opdrachten Conditionals
//Opdracht 1
var cijfer = 10;
// console.log(cijfer);
if (cijfer > 9) {
    console.log("Uitmuntend");
}
else if (cijfer >= 7 && cijfer <= 9) {
    console.log("Goed");
}
else if (cijfer >= 6 && cijfer < 7) {
    console.log("Voldoende");
}
else {
    console.log("Onvoldoende");
}
//Opdracht 2
switch (cijfer) {
    case 10: {
        console.log("Uitmuntend");
        break;
    }
    case 9: {
        console.log("Goed");
        break;
    }
    case 8: {
        console.log("Goed");
        break;
    }
    case 7: {
        console.log("Goed");
        break;
    }
    case 6: {
        console.log("Voldoende");
        break;
    }
    default: {
        console.log("Onvoldoende");
        break;
    }
}
//Opdracht 3
var purchasedBook = true;
var job = "teacher";
var inTrain = false;
if (purchasedBook && inTrain && job == "teacher") {
    console.log("Finally I can enjoy my book!");
}
else if (purchasedBook && !inTrain && job == "teacher") {
    console.log("I want some peace and quiet!");
}
else if (purchasedBook && !inTrain && job !== "teacher") {
    console.log("I want to read my book.");
}
else if (!purchasedBook && inTrain && job == "teacher") {
    console.log("I need a new book.");
}
else if (!purchasedBook && inTrain && job !== "teacher") {
    console.log("I want a new book.");
}
else if (!purchasedBook && !inTrain && job == "teacher") {
    console.log("I need a new book and some quiet.");
}
else if (!purchasedBook && !inTrain && job !== "teacher") {
    console.log("I want a new book and some quiet.");
}
else {
    console.log("I have an amazing life.");
}
