// Function Declarations vs Expressions
function sayHello() {
    console.log("Hi");
}
sayHello();
let sayHello2 = function () {
    console.log("Hi");
};
sayHello2();

console.log();

// hoisting
add(2, 4); // <= hoisting
// add2(3, 3); // add2の場合はError。関数式はホイスティングがサポートされていない。
function add(num1, num2) {
    console.log(num1 + num2);
}
add(2, 3);
let add2 = function (num1, num2) {
    console.log(num1 + num2);
}

console.log();

// function arguments
// 定義している引数の個数以上を呼び出し時に渡すことができる。
function multiply(num1, num2) {
    let product = 1;
    for (const num of arguments) product *= num;
    return product;
}
console.log(multiply(2)); // NaN
console.log(multiply(2, 2, 4)); // 4

console.log();

// The Rest Operator
let course = {
    name: "JavaScript for Beginners",
    duration: "3 hours"
};
let newCourse = {
    ...course,
    name: "JavaScript Pro"
};
console.log(course);
console.log(newCourse);
function multiply2(...args) {
    return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}
console.log(multiply2(1, 2, 3, 4));
function multiply3(multiplier, ...numbers) {
    return numbers.map(number => number * multiplier);
}
console.log(multiply3(2, 1, 2, 3, 4));

console.log();

// Default Parameter
function writeCode(language = "JavaScript") {
    console.log(`Write code in ${language}`);
}
writeCode("JavaScript");
writeCode("C#");
writeCode();
function codeDetails(language = "JavaScript", tool = "VS Code") {
    console.log(`Writing code in ${language} using ${tool}`);
}
codeDetails();
codeDetails("Python");
codeDetails("C#", "Visual Studio");
function createUser(name, role = "guest", status = "active") {
    console.log(`User: ${name}, Role: ${role}, Status: ${status}`);
}
createUser("Steven");
createUser("Alice", "admin", "active");

console.log();

// Getters and Setters
const courseForGetAndSet = {
    name: "JavaScript for Beginners",
    duration: "3 hours",
    get details() {
        return `${this.name} is ${this.duration}`;
    },
    set details(value) {
        let parts = value.split(" is ");
        this.name = parts[0];
        this.duration = parts[1];
    }
};
console.log(`${courseForGetAndSet.name} is ${courseForGetAndSet.duration}`);
console.log(courseForGetAndSet.details);
courseForGetAndSet.details = "JavaScript Pro is 10 hours";
console.log(courseForGetAndSet.details);

console.log();

// try-catch blocks
const courseForTryCatch = {
    name: "JavaScript for Beginners",
    duration: "3 hours",
    get details() {
        return `${this.name} is ${this.duration}`;
    },
    set details(value) {
        if (typeof value !== "string") {
            throw new Error(`Value, ${value} is not a string`);
        }
        let parts = value.split(" is ");
        this.name = parts[0];
        this.duration = parts[1];
    }
};
try {
    courseForTryCatch.details = 42;
} catch (e) {
    console.log(`Caught an error: ${e.message}`);
}

console.log();

// Local vs Global scope
// 変数のスコープの話。

// let vs const

// this keyword
function introduce(language) {
    console.log(this.name + " teaches " + language);
}

const instructor = { name: "Steven" };
const introduction = introduce.bind(instructor);
introduction("JavaScript");