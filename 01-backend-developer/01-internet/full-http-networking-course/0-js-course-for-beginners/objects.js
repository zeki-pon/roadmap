// object literals
const dog = {
    name: "henri",
    breed: "painter",
    age: 3,
    weightInPounds: 12,
    eat: function () {
        console.log("Chomp!");
    },
    bark() {
        console.log("Woof!");
    }
}

dog.eat();
dog.bark();

console.log();

// Factory Functions
// const anotherDog = {
//     name: "john",
//     breed: "lab",
//     age: 3,
//     weightInPounds: 12,
//     eat: function () {
//         console.log("Chomp!");
//     },
//     bark() {
//         console.log("Woof!");
//     }
// }
function getDog(name, breed, age, weightInPounds) {
    return {
        name: name,
        breed,        // keyと一致している場合は記述を簡略化できる
        age: age,
        weightInPounds: weightInPounds,
        eat: function () {
            console.log(`${this.name}: Chomp!`);
        },
        bark() {
            console.log(`${this.name}: Woof!`);
        }
    }
}
const anotherDog = getDog("Marley", "lab", 3, 60);
anotherDog.eat();
anotherDog.bark();

console.log();

// Constructor Functions
function Dog(name, breed, age, weightInPounds) {
    // this = {};

    // Add properties to this
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds = weightInPounds;

    this.eat = function () {
        console.log(`${this.name}: Chomp!`);
    }

    this.bark = function () {
        console.log(`${this.name}: Woof!`);
    }

    // return this;
}
const anotherDog2 = new Dog("Marley", "lab", 3, 60);
console.log(anotherDog2);

console.log();

// Objects are Dynamic
const person = {
    name: "henri"
};
console.log(person);
person.favoriteColor = "green";
console.log(person);
person["favoriteFood"] = "grape";
console.log(person);
delete person.favoriteFood;
console.log(person);
person.eat = function () {
    console.log("start eating");
}
person.eat();
// person = {};

console.log()

// The Constructor Property

// functions are objects
function add(num1, num2) {
    return num1 + num2;
}
const n = add;
console.log(n(2, 2));
console.log(add.length);
function Programmer(name) {
    this.name = name;
    this.writeCode = function () {
        console.log("Code in JavaScript");
    }
}
console.log(Programmer.length);
console.log(Programmer.constructor)
const Programmer2 = new Function("name", `
    this.name = name;
    this.writeCode = function() {
        console.log("Code in JavaScript");
    }
`);
const newProgrammer = new Programmer2("henri");
newProgrammer.writeCode();

console.log();

// value vs reference types
// primitive : number, string, boolean, null, undefined, symbol, bigInt
let a = 10;
let b = a;
a = 20;
console.log(`a = ${a}, b = ${b}`);
let c = { value: 20 };
let d = c;
c.value = 30;
console.log(`c.value = ${c.value}, d.value = ${d.value}`);

console.log();

// Enumerating Properties of an Object(オブジェクトのプロパティを列挙する)
const cat = {
    name: "Max",
    age: 5,
    eyeColor: "blue"
};
const keys = Object.keys(cat);
console.log(keys);
const values = Object.values(cat);
console.log(values);
const entries = Object.entries(cat);
console.log(entries);
for (const key of Object.keys(cat)) {
    console.log(key);
}
for (const value of Object.values(cat)) {
    console.log(value);
}
for (const entry of Object.entries(cat)) {
    console.log(entry);
}

console.log();

// Cloning an Object 
let source = { value: 20 };
let target = {};
Object.assign(target, source);
target.value = 10;
console.log(source);
console.log(target);
// let target2 = { ...a };
// console.log(target2);

console.log();

// Garbage Collection

// The Built in Math Functions
// floor(), round(), ceil(), max(), min(), sqrt(), pow(), random()
// 1-1000のランダム数値を求める
let max = 1000;
let min = 1;
let randomNum = Math.round(Math.random() * (max - min) + min);
console.log(randomNum);

console.log();

// String Methods
const str = "henri";
console.log(typeof str); // string
const anotherStr = new String("millet");
console.log(typeof anotherStr); // object
let sentence = " A new sentence ";
const doesIncludeNew = sentence.includes("new");
console.log(doesIncludeNew);
console.log(sentence[3]);
const startWithA = sentence.startsWith("A");
console.log(startWithA);
const endsWithA = sentence.endsWith("A");
console.log(endsWithA);
const updatedSentence = sentence.replace("new", "updated");
console.log(updatedSentence, " ", sentence);
const trimmedSentence = sentence.trim();
console.log(trimmedSentence);
const wordsInSentence = sentence.split(" ");
console.log(wordsInSentence);
let email = "TestTEmail@gmail.com";
let lowerCaseEmail = email.toLowerCase();
console.log(lowerCaseEmail);
let upperCaseEmail = email.toUpperCase();
console.log(upperCaseEmail);

console.log();

// Template Literals

console.log();

// The Date Object

console.log();
