//Workshop
function giveMeSomeNiceName(gender) {
    var myNewName = "";
    if (gender == "male") {
        myNewName = "Arnold";
    }
    else if (gender == "female") {
        myNewName = "Maria";
    }
    else if (gender == "helicopter") {
        myNewName = "Brenda";
    }
    else {
        myNewName = "Tanky the Tank";
    }
    console.log("My new name is " + myNewName);
    return myNewName;
}
giveMeSomeNiceName("male");
giveMeSomeNiceName("female");
giveMeSomeNiceName("helicopter");
giveMeSomeNiceName("tank");
var numberOfPigs;
var pigs = "";
var pig = function (numberOfPigs) {
    while (numberOfPigs > 0) {
        //pigs += "🐷";
        pigs += "\uD83D\uDC37";
        numberOfPigs--;
    }
    pigs += " Knor!";
    return pigs;
};
console.log(pig(5));
var numberOfFoxes;
var foxes = "";
var fox = function (numberOfFoxes) {
    while (numberOfFoxes > 0) {
        //foxes += "🦊";
        foxes += "\uD83E\uDD8A";
        numberOfFoxes--;
    }
    foxes += " What does the fox say!";
    return foxes;
};
console.log(fox(7));
var num;
var factorialize = function (num) {
    var result = num;
    if (result == 0 || result == 1) {
        return 1;
    }
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
};
console.log("5! " + factorialize(5));
var animal = prompt("Welk dier wil je horen?");
var sound = "";
var WriteASound = function (animal) {
    if (animal == "dog") {
        sound = "Woof!";
    }
    else if (animal == "cat") {
        sound = "Meow!";
    }
    else {
        sound = "What does the Fox say!";
    }
    sound = "A " + animal + " makes this sound, " + sound;
    return sound;
};
console.log(WriteASound(animal));
var PlayASound = function (animal) {
    //let barksound = new Audio("./assets/audio/" + animal + ".mp3");
    //barksound.play();
};
PlayASound(animal);
var handleAnimalSounds = function (func, WriteASound) {
    return func(animal);
};
console.log(handleAnimalSounds(WriteASound, "dog"));
//Opdrachten Functions
//Opdracht 1
var fibonacciCount = 0;
var f0;
var f1;
var f2;
var fibfunc = function (f0, f1) {
    while (fibonacciCount < 20) {
        console.log(f0);
        f2 = f0 + f1;
        f0 = f1;
        f1 = f2;
        fibonacciCount++;
    }
};
fibfunc(0, 1);
//Opdracht 2
var count = 10;
var countdown = function (jaartal) {
    while (count > 0) {
        console.log(count);
        count--;
    }
    return "Happy " + jaartal;
};
console.log(countdown(2018));
//Opdracht 3
console.log(HelloWorldfirst());
function HelloWorldfirst() {
    return "Hello World1";
}
//De functie kan wel gecalled worden, omdat de waarde van HelloWorldfirst wel kan worden opgehaald.
try {
    console.log(HelloWorldsecond());
}
catch (err) {
    console.log("Je kan een gedeclareerde functie niet hoisten.");
}
var HelloWorldsecond = function () {
    return "Hello World2";
};
//De functie kan niet gecalled worden, omdat de waarde van HelloWorldsecond niet kan worden opgehaald.
