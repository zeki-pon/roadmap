const timerC = time => new Promise(resolve => {
    setTimeout(() => {
        console.log(`exec: ${time}`);
        resolve(`resolve: ${time}`);
    }, time);
});
const arr = [400, 300, 700, 600, 500];

// NG code 
// end allが先に出力されてしまう
// (async function () {
//     const res = arr.map(async x => await timerC(x));
//     console.log(`end all`, res);
// })();

// OK Code
// ただ、各Promiseが終わってから実行するため処理時間を要する
// (async function () {
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         res.push(await timerC(arr[i]));
//     }
//     console.log(`end all`, res);
// })();

// OK Code改善版 並列で処理する Promise.allを使用したコードへ変更
// 通信やファイル読み込みなど、並列的に行うことで処理時間を短縮したい場合はPromise.all()
(async () => {
    const forAll = arr.map(x => timerC(x));
    const res = await Promise.all(forAll);
    console.log('end all', res);
})();