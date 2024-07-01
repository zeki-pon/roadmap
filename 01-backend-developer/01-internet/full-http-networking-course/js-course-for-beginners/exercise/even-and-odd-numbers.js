/**
 * ２つの関数を実装する
 * １つ目の関数について
 * 　数値の配列を受け取り、偶数のみの配列を作成して返す
 * 2つ目の関数について
 * 　奇数のみの配列を作成して返す
 */
function filterEven(numbers) {
    let evenArray = [];
    for (let element of numbers) {
        if (element % 2 === 0) evenArray.push(element);
    }
    return evenArray;
}

function finlterOdd(numbers) {
    let oddArray = [];
    for (let element of numbers) {
        if (element % 2 !== 0) oddArray.push(element);
    }
    return oddArray;
}

const numbers = [1, 2, 3, 4, 5, 6]
console.log(filterEven(numbers));
console.log(finlterOdd(numbers));