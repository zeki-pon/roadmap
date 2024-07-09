// 本題に入る前に、resolve()について学習
// const timerB = time => new Promise(resolve => {
//     setTimeout(() => {
//         resolve(`end: ${time}`);
//     }, time)
// });
// timerB(500)
//     .then(val => {
//         console.log(val); // "end: 500"
//     });

// 02のコードをより分かりやすくするため、async awaitを使用して書き換える
const timer = (time, text) => new Promise(resolve => {
    setTimeout(() => {
        console.log(text);
        resolve(`end: ${time}`);
    }, time)
});
const func = async function () {
    const res1 = await timer(500, "処理1"); // resolveの引数も受け取るz
    const res2 = await timer(600, "処理2");
    const res3 = await timer(700, "処理3");
    const res4 = await timer(800, "処理4");
    console.log(res1, res2, res3, res4);
}
func();