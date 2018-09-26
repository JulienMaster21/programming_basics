//Workshop
var x = 1;
while (x < 11) {
    console.log(x);
    x++;
}
var message = "Het is maandag!";
//console.log(message)
//console.log(message.length);
var messagecounter = 0;
//console.log(messagecounter);
while (messagecounter < 15) {
    console.log(message.charAt(messagecounter));
    messagecounter++;
}
var geweldig = "Geweldig";
//console.log(geweldig);
var geweldigcounter = geweldig.length;
//console.log(geweldigcounter);
var gidleweg = "";
while (geweldigcounter > 0) {
    geweldigcounter--;
    gidleweg += geweldig.charAt(geweldigcounter);
    //console.log(gidleweg);
}
console.log(gidleweg);
var i;
for (i = 1; i < 11; i++) {
    console.log(i);
}
var maandag = "Het is maandag!";
for (i = 0; i < 15; i++) {
    console.log(maandag.charAt(i));
}
for (i = 1; i <= 25; i++) {
    if (i % 3 == 0) {
        console.log(i + " is te delen door 3");
    }
    else {
        console.log(i + " is niet te delen door 3");
    }
}
//Opdrachten Loops
//Opdracht 1
var divide4 = 1;
//console.log(divide4);
while (divide4 <= 25) {
    if (divide4 % 4 == 0) {
        console.log(divide4 + " is te delen door 4");
    }
    else {
        console.log(divide4 + " is niet te delen door 4");
    }
    divide4++;
}
//Opdracht 2
var f0 = 0;
var f1 = 1;
var f2 = 0;
var fibonacci = 0;
while (fibonacci < 20) {
    console.log(f0);
    f2 = f0 + f1;
    f0 = f1;
    f1 = f2;
    fibonacci++;
}
//Opdracht 3
var array = [2, 4, 8, 9, 12, 13];
var total = 0;
for (i = 0; i < array.length; i++) {
    //console.log(array[i]);
    total += array[i];
}
console.log(total);
