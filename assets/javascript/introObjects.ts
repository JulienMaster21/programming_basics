//Workshop
const me : object = {
    name : "Julien Pleijte",
    age : 20,
    previousDiploma : "vwo Atheneum",
    favoriteVehicle : {
        name : "auto",
        wheels : 4,
        brand : "Volkswagen",
        model : "Up",
        drive : function () {
            return "VROOM!";
            }
        },
    vehicleDescription : function () {
            return `"Mijn favoriete vervoersmiddel is de ${(<any>me).favoriteVehicle.name} en die heeft ${(<any>me).favoriteVehicle.wheels} wielen. en die maakt het geluid ${(<any>me).favoriteVehicle.drive()}"`;
        },
    myFamily : ["Spike", "Bieke", "Shela", "Marissa", "Ronny"],
};
console.log(me);
(<any>me).isMale = true;
console.log(me);
console.log((<any>me).vehicleDescription());
const deckOfManyThings : object = {
    cards : ["2 of Hearts", "3 of Hearts", "4 of Hearts", "5 of Hearts", "6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts", "10 of Hearts", "Jack of Hearts", "Queen of Hearts", "Ace of Hearts",
            "2 of Spades", "3 of Spades", "4 of Spades", "5 of Spades", "6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades", "Jack of Spades", "Queen of Spades", "Ace of Spades",
            "2 of Diamonds", "3 of Diamonds", "4 of Diamonds", "5 of Diamonds", "6 of Diamonds", "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds", "Jack of Diamonds", "Queen of Diamonds", "Ace of Diamonds",
            "2 of Clubs", "3 of Clubs", "4 of Clubs", "5 of Clubs", "6 of Clubs", "7 of Clubs", "8 of Clubs", "9 of Clubs", "10 of Clubs", "Jack of Clubs", "Queen of Clubs", "Ace of Clubs"
            ],
    draw : function () {
                return (<any>deckOfManyThings).cards[Math.floor((Math.random() * (<any>deckOfManyThings).cards.length))];
            }
};
console.log((<any>deckOfManyThings).draw());
//Opdrachten
//Opdracht 1 versie 1
//De keys zijn de cijfers 0 tot 7.
const lapRounds : number[] = [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12];
//Maak een object waarin de waardes van lapRounds worden toegewezen aan een key van 0 tot 7.
const lapRoundsObj : object = Object.assign({}, lapRounds);
console.log(lapRoundsObj);
//Opdracht 1 versie 2
//teachers array met objecten.
const teachers : object[] = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek: 50,
        salary: 1250,
        salaryPerHour: function(teachers) {
            let sum : number = (<any>teachers).salary / (<any>teachers).hoursPerWeek;
            return `${teachers.name} verdient ${sum} euro per uur.`;
        }
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        hoursPerWeek: 20,
        salary: 1000,
        salaryPerHour: function(teachers) {
            let sum : number = (<any>teachers).salary / (<any>teachers).hoursPerWeek;
            return `${teachers.name} verdient ${sum} euro per uur.`;
        }
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        hoursPerWeek: 30,
        salary: 900,
        salaryPerHour: function(teachers) {
            let sum : number = (<any>teachers).salary / (<any>teachers).hoursPerWeek;
            return `${teachers.name} verdient ${sum} euro per uur.`;
        }
    }
];
//Console.log de gegevens van de objecten in een string.
teachers.forEach(element => {
    console.log(`"I have a ${(<any>element).profession} named ${(<any>element).name} and he likes to work on a ${(<any>element).brand} computer"`);
});
//Opdracht 2
//Call salaryPerHour voor elk object.
teachers.forEach(element => {
    console.log((<any>element).salaryPerHour(element));
});