function fizzbuzz(num) {
    if (typeof num !== "number") {
        return "required number";
    }

    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return `original number is ${num}`;
    }
}

console.log(fizzbuzz(15));
console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(4));