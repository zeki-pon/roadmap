// string
let favoriteFruit = 'strawberries';
let favorriteIceCream = 'chocolate';
let favoriteProgrammingLanguage = 'JavaScript';

// number
let numberOfDonuts = 12;
let pi = 3.14;
let largeNumber = 5435434363466;

// Bigint
let veryLargeNumber = 10n;
console.log(`veryLargeNumber type is ${typeof veryLargeNumber}`)

// boolean
let lovesCoding = true;
console.log(`lovesCoding type is ${typeof lovesCoding}`);

// undefined
let favoriteColor;
console.log(`favoriteColor is ${favoriteColor}`);

// null
favoriteFruit = null;

// Symbol
const uniqueKey = Symbol();

// object
let course = {
    name: 'Javascript for Beginners',
    hours: 3
};
console.log(course.name)
let keyName = 'hours';
console.log(course[keyName]);

// arrays
let productColors = ['blue', 'green'];
productColors[0] = 42;
