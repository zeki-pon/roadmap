// if-else

// switch-case
let job = 'Sales Engineer';
switch (job) {
    case 'Sales Engineer':
        console.log('a');
        break;
    case 'Designer':
        console.log('b');
        break;
    default:
        console.log('d');
}

// loop
let numbers = [1, 2, 3, 4, 5, 6, 7];
// bad case
// let idx = 0;
// let lengthOfArray = numbers.length;
// console.log(numbers[idx++]); // shift + option + ↓
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx]); 
for (let idx = 0; idx < numbers.length; idx++) {
    console.log(numbers[idx]);
}

// while
let idxForWhile = 0;
while (idxForWhile < numbers.length) {
    console.log(numbers[idxForWhile]);
    idxForWhile++;
}
let sum = 0;
while (true) {
    console.log('loop!');
    sum++;

    if (sum === 10) break;
}

// do while
let idxForDoWhile = 0;
do {
    console.log(numbers[idxForDoWhile]);
    idxForDoWhile++;
} while (idxForDoWhile > numbers.length - 5)

// infinite loops 

// for in loops
const course = {
    name: 'javaScript',
    duration: 3,
    sections: 7
};
// console.log(course.name);
// console.log(course['duration']);
// console.log(course.sections);
for (const key in course) {
    console.log(`${key}: ${course[key]}`);
}

// for of loops
for (let element of numbers) {
    console.log(element);
}
console.log()

// break and continue
// for (let i = 0; i < 10; i++) {
//     if (i === 5) break;
//     console.log(i);
// }
let idxBAC = 0;
// while (idxBAC < 10) {
//     if (idxBAC === 5) break;
//     console.log(idxBAC);
//     idxBAC++;
// }
// do {
//     if (idxBAC === 5) break;
//     console.log(idxBAC);
//     idxBAC++;
// } while (idxBAC < 10);
const obj = { a: 1, b: 2, c: 3, d: 4 };
// for (let key in obj) {
//     if (key === 'b') break;
//     console.log(obj[key]);
// }
const arr = [1, 2, 3, 4, 5];
// for (let element of arr) {
//     if (element === 3) break;
//     console.log(element);
// }
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
// }
idxBAC = 0;
// while (idxBAC < 10) {
//     idxBAC++;
//     if (idxBAC % 2 === 0) continue;
//     console.log(idxBAC);
// }
// do {
//     idxBAC++;
//     if (idxBAC % 2 === 0) continue;
//     console.log(idxBAC);
// } while (idxBAC < 10);
// for (let key in obj) {
//     if (obj[key] % 2 === 0) continue;
//     console.log(obj[key]);
// }
// for (let element of arr) {
//     if (element % 2 === 0) continue;
//     console.log(element);
// }