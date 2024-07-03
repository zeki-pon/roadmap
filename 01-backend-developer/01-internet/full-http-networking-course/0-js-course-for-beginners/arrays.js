// Adding Elements
// push(), unshift(), splice()
const nums = [1, 2, 3, 4, 5];
nums.splice(1, 0, 25, 24);
console.log(nums);

console.log();

// Finding Elements(primitives)
// indexOf(), lastIndexOf(), includes()

// Finding Elements(references)
const employees = [
    {
        id: 1,
        name: "Jim"
    },
    {
        id: 2,
        name: "Max"
    },
    {
        id: 3,
        name: "John"
    },
];
const employee = employees.find(function (e) {
    return e.name === "Jim"
});
const employeeIdx = employees.findIndex(function (e) {
    return e.name === "Jim"
});
console.log(employee);
console.log(employeeIdx);

console.log();

// Arrow Functions
function add(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2) => {
    return num1 + num2;
}
const addArrow2 = (num1, num2) => num1 + num2;
const employeeArrow = employees.find((e) => {
    return e.name === "Jim"
});
const employeeArrow2 = employees.find((e) => e.name === "Jim");

console.log();

// Removing Elements
// pop(), splice(), shift()
const numbers = [1, 2, 3, 4, 5];
const lastElement = numbers.pop();
console.log(numbers);
console.log(lastElement);
const firstElement = numbers.shift();
console.log(numbers);
console.log(firstElement);
const middleElement = numbers.splice(1, 1); // return array
console.log(numbers);
console.log(middleElement);

console.log();

// emptying an array
const emptyTargetArray = [1, 2, 3, 4, 5];
// while (emptyTargetArray.length > 0) {
//     emptyTargetArray.pop();
//     emptyTargetArray.shift();
// }
const deletedValues = emptyTargetArray.splice(0, emptyTargetArray.length);
console.log(`target: ${emptyTargetArray}, deletedValues: ${deletedValues}`);
// numbers = []; // const -> letにする

console.log();

// Combining and Slicing Arrays
// concat, slice
const exampleNumbersA = [1, 2, 3];
const exampleNumbersB = [4, 5, 6];
const combinedArray = exampleNumbersA.concat(exampleNumbersB);
console.log(combinedArray);
const firtstSlice = combinedArray.slice(0, 4);
console.log(firtstSlice);

console.log();

// Spread Operator ...
const numsA = [1, 2, 3];
const numsB = [4, 5, 6];
let combined = [...numsA, 9, ...numsB];
console.log(combined);
const numsC = [...numsB];
numsC.pop();
console.log(`numsB: ${numsB}, numsC: ${numsC}`);

console.log();

// Iterating an Array
const numsIte = [1, 2, 3, 4, 5];
numsIte.forEach((value, index, array) => {
    console.log(`value: ${value}, index: ${index}, array: ${array}`);
});

console.log();

// joinning arrays;
const numsJoin = [1, 2, 3, 4, 5];
const joinnedNums = numsJoin.join(', ');
console.log(joinnedNums);
const courseName = "JavaScript for Beginners";
// const lowerCaseCourseName = courseName.toLowerCase();
// const parts = lowerCaseCourseName.split(" ");
const parts = courseName.toLowerCase().split(" ");
console.log(parts);
const urlSlug = parts.join("-");
console.log(urlSlug);

console.log();

// sorting arrays
// primitive
let characters = ['c', 'd', 'a', 'b'];
characters.sort();
characters.reverse();
console.log(characters);
// object
let persons = [
    { id: 1, name: "Jen" },
    { id: 2, name: "Steven" },
    { id: 3, name: "Andrew" },
    { id: 4, name: "Terry" },
];
persons.sort((a, b) => {
    const lowerCaseA = a.name.toLowerCase();
    const lowerCaseB = b.name.toLowerCase();

    if (lowerCaseA < lowerCaseB) return -1;
    if (lowerCaseA > lowerCaseB) return 1;
    return 0;
});
console.log(persons);

console.log();

// Testing the Elements of an Array
// every(), some()
const testNums = [2, 4, 6, 8, 10];
const areAllEven = testNums.every((value, index, array) => {
    return value % 2 === 0
});
console.log(`areAllEven: ${areAllEven}`);
const testNums2 = [1, 3, 5, 7, 8, 9];
const hasOneEvenNumber = testNums2.some((v, i, a) => v % 2 === 0);
console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`);

console.log();

// Filtering an Array
// primitive
const filterNums = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterNums.filter((value, index, array) => value % 2 === 0);
console.log(evenNumbers);
// object
const members = [
    { id: 1, name: "Alice", },
    { id: 2, name: "Bob", role: "Designer" },
    { id: 3, name: "Charlie", },
    { id: 4, name: "Danielle", role: "Manager" },
];
const developers = members.filter(member => member.role === "Developer");
console.log(developers);

console.log();

// mapping an array
const mapNums = [2, 4, 6, 8, 10];
const squaredNumbers = mapNums.map(num => num * num);
console.log(squaredNumbers);
const mapCharas = ['a', 'b', 'c'];
const upperCaseCharas = mapCharas.map(chara => chara.toUpperCase());
console.log(upperCaseCharas);
const mapEmployees = [
    { id: 1, name: "Alice", email: "AliCe@gmail.com" },
    { id: 2, name: "Bob", email: "Bob@gmail.com" },
    { id: 3, name: "Charlie", email: "Charlie@gmail.com" },
    { id: 4, name: "Danielle", email: "Danielle@gmail.com" },
]
const updatedEmployees = mapEmployees.map(emp => ({
    ...emp,
    email: emp.email.toLowerCase()
}));
console.log(updatedEmployees);

console.log();

// Reducing an Array
const redNums = [1, 10, 5, 14];
let sum = redNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0は初期値。指定しなくても動作するが、指定推奨とのこと。
console.log(`sum is ${sum}`);
let multi = redNums.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);
console.log(multi);

console.log();