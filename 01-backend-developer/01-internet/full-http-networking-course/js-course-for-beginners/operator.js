// -, +, *, /, %

// >, < >=, <=

// ==, ===

// 条件演算子
let age = 16;
const canDrive = age >= 16 ? true : false;
console.log(`canDrive is ${canDrive}`);

// 論理演算子
// ||, &&, !, ??
let a = null;
const result = a ?? 'Hi'; // nullの場合の振る舞いを??の後ろに記述. 以下と同じ意味
// const result = (a !== null && a !== undefined) ? a : 'Hi';
console.log(`result is ${result}`)

// false : undefined, null, 0, false, '', NaN

// 優先順位
let n = 5 + 5 * 4;
console.log(`n = ${n}`);