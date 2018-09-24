//Workshop
let x: number = 1;
while (x < 11) {
    console.log(x);
    x++;
}
let message: string = "Het is maandag!";
//console.log(message)
//console.log(message.length);
let messagecounter: number = 0;
//console.log(messagecounter);
while (messagecounter < 15) {
    console.log(message.charAt(messagecounter));
    messagecounter++;
}
let geweldig: string = "Geweldig"
//console.log(geweldig);
let geweldigcounter: number = geweldig.length;
//console.log(geweldigcounter);
let gidleweg: string = "";
while (geweldigcounter > 0) {
    geweldigcounter--;
    gidleweg += geweldig.charAt(geweldigcounter);
    //console.log(gidleweg);
}
console.log(gidleweg);
let i: number;
for (i = 1; i < 11; i++) {
    console.log(i);
}
let maandag: string = "Het is maandag!";
for (i = 0; i < 15; i++) {
    console.log(maandag.charAt(i));
}
for (i = 1; i <= 25; i++) {
    if (i % 3 == 0) {
        console.log(`${i} is te delen door 3`);
    }
    else {
        console.log(`${i} is niet te delen door 3`);
    }
}
//Opdrachten
//Opdracht 1
let divide4: number = 1;
//console.log(divide4);
while (divide4 <= 25) {
    if (divide4 % 4 == 0) {
        console.log(`${divide4} is te delen door 4`);
    }
    else {
        console.log(`${divide4} is niet te delen door 4`);
    }
    divide4++;
}
//Opdracht 2
let f0 : number = 0;
let f1 : number = 1;
let f2 : number = 0;
let fibonacci: number = 0;
while (fibonacci < 20) {
    console.log(f0);
    f2 = f0 + f1;
    f0 = f1;
    f1 = f2;
    fibonacci++;
}
//Opdracht 3
let array : number[] = [2, 4, 8, 9, 12, 13];
let total: number = 0;
for (i = 0; i < array.length; i++) {
    //console.log(array[i]);
    total += array[i];
}
console.log(total);